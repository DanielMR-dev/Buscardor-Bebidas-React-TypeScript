import { StateCreator } from "zustand";

type Notifitacion = {
    text: string;
    error: boolean;
    show: boolean;
}

export type NotificationSliceType = {
    notification: Notifitacion
};

export const createNotificationSlice : StateCreator<NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
});
