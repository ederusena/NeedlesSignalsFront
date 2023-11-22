import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import http from '@/services/http';

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token'));
  const userId = ref(localStorage.getItem('userId'));
  const user = ref();

  function setToken(tokenValue) {
    localStorage.setItem('token', tokenValue);
    token.value = tokenValue;
  }

  function setUserId(userValue) {
    localStorage.setItem('userId', userValue);
    userId.value = userValue;
  }

  function isAuthenticated() {
    return token.value;
  }

  // const fullName = computed(() => {
  //   return `${firstName.value} ${lastName.value}`;
  // });

  async function getUserById(id) {
    const { data } = await http.get(`/v1/user/${id.value}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (data) {
      user.value = data;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    token.value = null;
    userId.value = null;
  }

  async function authenticate(credentials) {
    const { email, password } = credentials;
    const { data } = await http.post('/v1/auth/authenticate', {
      email,
      password,
    });

    if (data) {
      setToken(data.token);
      setUserId(data.userId);
      return true;
    }
    return false;
  }

  async function registration(credentials) {
    const { email, password, name, lastname, cpf } = credentials;
    const { data } = await http.post('/v1/auth/register', {
      "email": email,
      "password": password,
      "firstName": name,
      "lastName": lastname,
      "cpfcnpj": cpf,
    });

    if (data) {
      setToken(data.token);
      setUserId(data.userId);
      return true;
    }
    return false;
  }

  async function checkToken() {
    try {
      // const tokenAuth = `Bearer ${token}`;
      // const { data } = await http.get('/v1/auth/verify', {
      //   headers: {
      //     Authorization: tokenAuth,
      //   },
      // });
      return token;
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return {
    user,
    token,
    userId,
    logout,
    setToken,
    setUserId,
    checkToken,
    getUserById,
    registration,
    authenticate,
    isAuthenticated,
  };
});
