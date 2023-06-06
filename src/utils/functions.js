export function FormatDate(givenDate) {
  const event = new Date(givenDate);
  const date = event.toDateString().slice(0, -4);
  return date;
}

export function FormatDateWithoutYear(givendate) {
	const event = new Date(givendate)
	const newDate = event.toDateString().slice(0, -4)
	return newDate
}