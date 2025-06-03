// export function formatDate(date) {
//   return date.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// For both date and time
// export function formatDate(date) {
//   return date.toLocaleString("en-US", {
//     month: "short", // 'Jun'
//     day: "numeric", // '1'
//     year: "numeric", // '2025'
//     hour: "numeric", // '12'
//     minute: "2-digit", // '34'
//     hour12: true, // Use AM/PM
//   });
// }

// Formatting date and time using date-fns
import { format } from "date-fns";

export function formatDate(date) {
  return format(date, "MMM d, yyyy, h:mm a");
}
