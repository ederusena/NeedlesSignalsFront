<template>
  <div class="">
    <header class="relative py-10">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-slate-950">Configurações</h1>
      </div>
    </header>
    <main class="relative">
      <div class="max-w-screen-xl px-4 pb-4 mx-auto sm:px-6 lg:pb-16 lg:px-8">
        <div class="overflow-hidden bg-white rounded-lg shadow">
          <div
            class="divide-y divide-gray-200 lg:grid lg:grid-cols-9 lg:divide-y-0 lg:divide-x"
          >
            <form
              class="divide-y divide-gray-200 lg:col-span-9"
              action="#"
              method="POST"
            >
              <!-- Profile section -->
              <div class="px-4 py-6 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">
                    Profile
                  </h2>
                  <p class="mt-1 text-sm text-gray-500">
                    Essas informações não serão exibidas publicamente.
                  </p>
                </div>

                <div class="flex flex-col mt-6 lg:flex-row">
                  <div class="flex-grow space-y-6">
                    <div>
                      <label
                        for="username"
                        class="block text-sm font-medium text-gray-700"
                      >
                        edersena
                      </label>
                      <div class="flex mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          class="flex-grow block w-full min-w-0 p-4 border-gray-300 rounded-none focus:ring-sky-500 focus:border-sky-500 rounded-r-md sm:text-sm"
                          :value="user.handle"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="about"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Sobre
                      </label>
                      <div class="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows="3"
                          class="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="flex-grow mt-6 lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
                  >
                    <p
                      class="text-sm font-medium text-gray-700"
                      aria-hidden="true"
                    >
                      Foto
                    </p>
                    <div class="mt-1 lg:hidden">
                      <div class="flex items-center">
                        <div
                          class="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                          aria-hidden="true"
                        >
                          <img
                            class="w-full h-full rounded-full"
                            :src="user.imageUrl"
                            alt=""
                          />
                        </div>
                        <div class="ml-5 rounded-md shadow-sm">
                          <div
                            class="relative flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md group hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500"
                          >
                            <label
                              for="mobile-user-photo"
                              class="relative text-sm font-medium leading-4 text-gray-700 pointer-events-none"
                            >
                              <span>Trocar</span>
                              <span class="sr-only"> foto usuario</span>
                            </label>
                            <input
                              id="mobile-user-photo"
                              name="user-photo"
                              type="file"
                              class="absolute w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="relative hidden overflow-hidden rounded-full lg:block"
                    >
                      <img
                        class="relative w-40 h-40 rounded-full"
                        :src="user.imageUrl"
                        alt=""
                      />
                      <label
                        for="desktop-user-photo"
                        class="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100 focus-within:opacity-100"
                      >
                        <span>Trocar</span>
                        <span class="sr-only"> foto usuario</span>
                        <input
                          type="file"
                          id="desktop-user-photo"
                          name="user-photo"
                          class="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-12 gap-6 mt-6">
                  <div class="col-span-12 sm:col-span-6">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >Nome</label
                    >
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                      >Sobrenome</label
                    >
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <!-- Privacy section -->
              <div class="pt-6 divide-y divide-gray-200">
                <div class="px-4 sm:px-6">
                  <div>
                    <h2 class="text-lg font-medium leading-6 text-gray-900">
                      Privacidade
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Decida quais informações você deseja compartilhar.
                    </p>
                  </div>
                  <ul role="list" class="mt-2 divide-y divide-gray-200">
                    <SwitchGroup
                      as="li"
                      class="flex items-center justify-between py-4"
                    >
                      <div class="flex flex-col">
                        <SwitchLabel
                          as="p"
                          class="text-sm font-medium text-gray-900"
                          passive
                        >
                          Notificações
                        </SwitchLabel>
                        <SwitchDescription class="text-sm text-gray-500">
                          Deseja receber notificações por push notification?
                        </SwitchDescription>
                      </div>
                      <Switch
                        v-model="availableToHire"
                        :class="[
                          availableToHire ? 'bg-teal-500' : 'bg-gray-200',
                          'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            availableToHire ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                          ]"
                        />
                      </Switch>
                    </SwitchGroup>
                  </ul>
                </div>
                <div class="flex justify-end px-4 py-4 mt-4 sm:px-6">
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 ml-5 text-sm font-medium text-white bg-indigo-700 border border-transparent rounded-md shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue';
import { SearchIcon } from '@heroicons/vue/solid';
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/vue/outline';

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Applicants', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
];
const subNavigation = [
  { name: 'Profile', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const availableToHire = ref(true);
    const privateAccount = ref(false);
    const allowCommenting = ref(true);
    const allowMentions = ref(true);

    return {
      user,
      navigation,
      subNavigation,
      userNavigation,
      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
    };
  },
};
</script>
