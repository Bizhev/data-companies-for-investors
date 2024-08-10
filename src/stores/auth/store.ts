import { defineStore } from 'pinia';
import {api} from "@/shared/api";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser(state): unknown {
      return state.user;
    },
  },
  actions: {
    async login(login, password) {
      try {
        const res = await api.post('/api/auth/login', {
          username: login,
          password,
        });

        if (res?.data?.access_token) {
          this.setToken(res.data.access_token);
          window.location.href = '/';
        }
      } catch (e) {
        console.log({ e });
      }
    },
    setToken(token) {
      localStorage.setItem('bear', `Bearer ${token}`);
      api.defaults.headers.common.Authorization = token;
    },
  },
});
