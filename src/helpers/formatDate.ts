export const formateDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        weekday: "long",
        month: "long",
        year: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
};
