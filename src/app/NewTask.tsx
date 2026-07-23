import { CREATE_TASK, GET_TASK, UPDATE_TASK } from "@/graphql/queries";
import { useMutation } from "@apollo/client/react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

interface TaskFormData {
  title: string;
  description: string;
  startedAt: string;
  endAt: string;
  timeStartedAt: string;
}

export default function NewTaskScreen() {
  const [activeField, setActiveField] = useState<"startedAt" | "endAt" | null>(
    null,
  );
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const openDatePicker = (field: "startedAt" | "endAt") => {
    setActiveField(field);
    const currentValue = getValues(field);
    
    if (currentValue) {
      setDate(new Date(currentValue));
    } else {
      setDate(new Date());
    }

    setShowPicker(true);
  };

  const onChangeDatePicker = ({ type }, selectedDate) => {
    if (type === "set") {
      setDate(selectedDate);

      if (Platform.OS === "android") {
        setShowPicker(false);
        setShowTimePicker(true);
      }

    } else {
      setShowPicker(false);
      setActiveField(null);
    }
  };

  const onChangeTimePicker = ({ type }, selectedTime) => {
    if (type === "set") {
      const updatedDateTime = new Date(date);
      updatedDateTime.setHours(selectedTime.getHours());
      updatedDateTime.setMinutes(selectedTime.getMinutes());

      const localDate = updatedDateTime.toLocaleDateString("sv-SE");
      const localTime = updatedDateTime.toLocaleTimeString("en-GB");
      const formattedDateTime = `${localDate}T${localTime}`;

      if (activeField) {
        setValue(activeField, formattedDateTime, { shouldValidate: true });
      }

      if (Platform.OS === "android") {
        setShowTimePicker(false);
        setActiveField(null);
      }

    } else {
      setShowTimePicker(false);
      setActiveField(null);
    }
  };

  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    description?: string;
    startedAt?: string;
    endAt?: string;
  }>();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<TaskFormData>({
    defaultValues: {
      title: params.title || "",
      description: params.description || "",
      startedAt: params.startedAt || "",
      endAt: params.endAt || "",
    },
  });

  const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASK }],
  });

  const [updateTask, { loading: loadingUpdate, error: errorUpdate }] =
    useMutation(UPDATE_TASK, {
      refetchQueries: [{ query: GET_TASK }],
    });

  const onSubmit = async (data: TaskFormData) => {
    try {
      if (params.id) {
        const response = await updateTask({
          variables: {
            id: params.id,
            title: data.title,
            description: data.description,
            startedAt: data.startedAt,
            endAt: data.endAt,
          },
        });
        console.log("Tugas berhasil diupdate", response.data);
        router.back();
      } else {
        const response = await createTask({
          variables: {
            title: data.title,
            description: data.description,
            startedAt: data.startedAt,
            endAt: data.endAt,
          },
        });
        console.log("Tugas berhasil dibuat:", response.data);
        router.back();
      }
    } catch (err) {
      console.error("Gagal membuat tugas:", err);
    }
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      {errors.description && <Text>This is required.</Text>}

      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          is24Hour={true}
          onChange={onChangeDatePicker}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          mode="time"
          display="spinner"
          value={date}
          is24Hour={true}
          onChange={onChangeTimePicker}
        />
      )}
      <Pressable onPress={() => openDatePicker("startedAt")}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { value } }) => (
            <Text>{value ? value : "Waktu Mulai"}</Text>
          )}
          name="startedAt"
        />
      </Pressable>

      <Pressable onPress={() => openDatePicker("endAt")}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { value } }) => (
            <Text>{value ? value : "Waktu Selesai"}</Text>
          )}
          name="endAt"
        />
      </Pressable>
      {errors.endAt && <Text>This is required.</Text>}
      <Button
        title={loading || loadingUpdate ? "Menyimpan..." : "Submit"}
        disabled={loading || loadingUpdate}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
