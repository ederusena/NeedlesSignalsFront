<template>
  <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="w-auto h-24 mx-auto"
        src="@/assets/logofilled.png"
        alt="Workflow"
      />
      <h2 class="mt-6 text-3xl font-extrabold text-center text-white">
        Cadastro Usuário
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <Form :validation-schema="schema" class="space-y-6" @submit="onSubmit">
          <BaseInput name="name" label="Nome" v-model="user.name" />
          <ErrorMessage name="name" as="p">
            <p class="p-2 text-sm font-medium text-red-500 rounded-md bg-red-50">Nome não pode ser vazio e deve ter mais que 3 caracteres!</p>
          </ErrorMessage>

          <BaseInput
            name="lastname"
            label="Sobrenome"
            v-model="user.lastname"
          />
          <ErrorMessage name="lastname" as="p">
            <p class="p-2 text-sm font-medium text-red-500 rounded-md bg-red-50">Sobrenome não pode ser vazio e deve ter mais que 3 caracteres!</p>
          </ErrorMessage>

          <BaseInput name="cpf" label="CPF" v-model="user.cpf" />
          <ErrorMessage name="cpf" as="p">
            <p class="p-2 text-sm font-medium text-red-500 rounded-md bg-red-50">Por favor digitar cpf válido!</p>
          </ErrorMessage>

          <BaseInput
            name="email"
            type="email"
            label="Email"
            v-model="user.email"
          />
          <ErrorMessage name="email" as="p">
            <p class="p-2 text-sm font-medium text-red-500 rounded-md bg-red-50">Por favor digitar um email válido!</p>
          </ErrorMessage>

          <BaseInput
            name="password"
            type="password"
            label="Senha"
            v-model="user.password"
          />
          <ErrorMessage name="password" as="p">
            <p class="p-2 text-sm font-medium text-red-500 rounded-md bg-red-50">Digitar uma senha com mais que 8 caracteres!</p>
          </ErrorMessage>

          <BaseInput
            name="confirmpassword"
            type="password"
            label="Confirmar Senha"
            v-model="user.confirmpassword"
          />
          <ErrorMessage name="confirmpassword" as="p">
            <p class="p-2 text-sm font-medium text-red-500 rounded-md bg-red-50">As senhas não coincidem!</p>
          </ErrorMessage>

          <div class="button-container">
            <BaseButton label="Registrar" primary />

            <BaseButton
              label="Cancelar"
              secondary
              @click.prevent="cancelar"
            />
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, ErrorMessage } from 'vee-validate';
import { useUserStore } from '@/stores/auth';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';


const userStore = useUserStore();
const router = useRouter();
const user = reactive({
  email: '',
  password: '',
  name: '',
  lastname: '',
  cpf: '',
  confirmpassword: '',
});

const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().min(3).required(),
  lastname: yup.string().min(3).required(),
  cpf: yup.string().min(11).required(),
  password: yup.string().min(8).required(),
  confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas não coincidem!'),
});


const onSubmit = async () => {
  try {
    const userAuth = await userStore.registration(user);
    if (userAuth) {
      router.push('/dashboard');
    }
  } catch (error) {
    console.log(error?.response?.data);
  }
};

const cancelar = async () => {
  user.email = '';
  user.password = '';
  user.name = '';
  user.lastname = '';
  user.cpf = '';
  user.confirmpassword = '';
  router.push('/');
};
</script>

<style lang="postcss" scoped>
.button-container {
  @apply flex md:items-center md:justify-between md:gap-2 md:flex-row flex-col gap-2;
}
</style>
