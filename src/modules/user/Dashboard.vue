<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 z-40 flex md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-indigo-700"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 pt-2 -mr-12">
                <button
                  type="button"
                  class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex items-center flex-shrink-0 gap-4 px-4">
              <img
                class="w-auto h-8"
                src="@/assets/logofilledWhite.png"
                alt="Workflow"
              />
              <h2 class="text-lg font-bold text-white">Needles Signals</h2>
            </div>
            <div class="flex-1 h-0 mt-5 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  @click="handleNavigationClick(item.name)"
                  :class="[
                    item.current
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:bg-indigo-600',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                  ]"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 w-6 h-6 mr-4 text-indigo-300"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-indigo-700">
        <div class="flex items-center flex-shrink-0 gap-2 px-4">
          <img
            class="w-auto h-10"
            src="@/assets/logofilledWhite.png"
            alt="needlessignalslogo"
          />
          <h2 class="text-lg font-bold text-white">Needles Signals</h2>
        </div>
        <div class="flex flex-col flex-1 mt-5">
          <nav class="flex-1 px-2 pb-4 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              @click="handleNavigationClick(item.name)"
              :class="[
                item.current
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-600',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
            >
              <component
                :is="item.icon"
                class="flex-shrink-0 w-6 h-6 mr-3 text-indigo-300"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>

    <div class="flex flex-col flex-1 h-full bg-slate-100 md:pl-64">
      <div class="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow">
        <button
          type="button"
          class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="w-6 h-6" aria-hidden="true" />
        </button>
        <div class="flex justify-between flex-1 px-4">
          <div class="flex flex-1">
            <form class="flex w-full md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                >
                  <SearchIcon class="w-5 h-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="flex items-center ml-4 md:ml-6">
            <button
              type="button"
              class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="w-6 h-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      @click='handleLogout'
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="flex-1 pb-8">
        <!-- Page header -->
        <div class="bg-white shadow">
          <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div
              class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"
            >
              <div class="flex-1 min-w-0">
                <!-- Profile -->
                <div class="flex items-center">
                  <img
                    class="hidden w-16 h-16 rounded-full sm:block"
                    src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div>
                    <div class="flex items-center">
                      <img
                        class="w-16 h-16 rounded-full sm:hidden"
                        src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <h1
                        class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate"
                      >
                        {{ periodoDoDia }}, {{ fullName }}
                      </h1>
                    </div>
                    <dl
                      class="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap"
                    >
                      <dt class="sr-only">Account status</dt>
                      <dd
                        class="flex items-center mt-3 text-sm font-medium text-gray-500 capitalize sm:mr-6 sm:mt-0"
                      >
                        <CheckCircleIcon
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                        Conta verificada
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <transition :name="componentTransitionName" mode="out-in">
          <component :is="currentComponent" key="componentKey"></component>
        </transition>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import DashboardComponent from '@/modules/user/components/Dashboard/DashboardComponent.vue';
import FavoriteComponent from '@/modules/user/components/Dashboard/FavoriteComponent.vue';
import ProfileComponent from '@/modules/user/components/Dashboard/ProfileComponent.vue';
import SinaisComponent from '@/modules/user/components/Dashboard/SinaisComponent.vue';
import ConfigComponent from '@/modules/user/components/Dashboard/ConfigComponent.vue';

import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  XIcon,
  RssIcon,
  StarIcon,
  HomeIcon,
  BellIcon,
  UsersIcon,
  MenuAlt2Icon,
  AdjustmentsIcon,
  CheckCircleIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Sinais', href: '#', icon: RssIcon, current: false },
  { name: 'Favoritos', href: '#', icon: StarIcon, current: false },
  { name: 'Profile', href: '#', icon: UsersIcon, current: false },
  { name: 'Configuração', href: '#', icon: AdjustmentsIcon, current: false },
];
const userNavigation = [
  { name: 'Sign out', href: '#' },
];

const horaAtual = new Date().getHours();

const periodoDoDia = computed(() => {
  if (horaAtual >= 0 && horaAtual < 12) {
    return 'Bom dia';
  } else if (horaAtual >= 12 && horaAtual < 18) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
});
const router = useRouter();
const sidebarOpen = ref(false);
const userStore = useUserStore();
const { user, userId } = storeToRefs(userStore);
const fullName = computed(() => {
  if (user.value && user.value.firstName && user.value.lastName) {
    return `${user.value.firstName} ${user.value.lastName}`;
  } else {
    return 'Loading...'; // Or any other default value or message
  }
});

const componentKey = ref(0); // Adicione uma chave única para forçar a atualização do componente

const activeNavigationItem = ref('Dashboard');

const componentTransitionName = computed(() => {
  // Adapte o nome da transição conforme necessário
  return activeNavigationItem.value ? 'fade' : '';
});

const currentComponent = computed(() => {
  // Mapeie os itens de navegação para os componentes correspondentes
  const componentMap = {
    Dashboard: DashboardComponent, // Substitua 'DashboardComponent' pelo nome do seu componente
    Sinais: SinaisComponent,
    Favoritos: FavoriteComponent,
    Configuração: ConfigComponent,
    Profile: ProfileComponent,
  };

  // Retorna o componente correspondente ao item de navegação ativo
  return componentMap[activeNavigationItem.value] || null;
});

const handleNavigationClick = (itemName) => {
  // Atualiza o item de navegação ativo
  activeNavigationItem.value = itemName;
  componentKey.value += 1;
  navigation.forEach((item) => {
    item.current = item.name === itemName;
  });

  // Fecha a barra lateral após clicar em um item
  sidebarOpen.value = false;
};

// Adicione uma função para redefinir o item de navegação ativo ao clicar fora do componente
const resetActiveNavigation = () => {
  activeNavigationItem.value = null;
};

const handleLogout = () => {
  userStore.logout();
  router.push({ name: 'Login' });
};

onMounted(async () => {
  const id = localStorage.getItem('userId');
  await userStore.getUserById(id);
});
</script>
