import dayjs from 'dayjs';

export const dateToView = (date: string) => dayjs(date).format('MM.DD.YYYY');
