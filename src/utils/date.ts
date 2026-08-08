export const formatEpochToString = (
  epoch: number | string | null | undefined,
  includeTime: boolean = false,
): string => {
  if (!epoch) return "-";

  let dateObj: Date;
  if (typeof epoch === "number") {
    dateObj = new Date(epoch);
  } else {
    const parsed = Number(epoch);
    if (!isNaN(parsed) && epoch.trim() !== "") {
      dateObj = new Date(parsed);
    } else {
      dateObj = new Date(epoch);
    }
  }

  if (isNaN(dateObj.getTime())) return "-";

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  if (includeTime) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  return new Intl.DateTimeFormat("id-ID", options).format(dateObj);
};
