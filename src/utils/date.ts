export const formatEpochToString = (
  epoch: number | string | null | undefined,
  includeTime: boolean = false,
): string => {
  if (!epoch) return "-";

  const epochNumber = typeof epoch === 'string' ? Number(epoch) : epoch;

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  if (includeTime) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  return new Intl.DateTimeFormat("id-ID", options).format(epochNumber);
};
