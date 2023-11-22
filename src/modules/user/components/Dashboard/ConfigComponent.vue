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
                          Deseja receber notificações por push?
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
                          Make account private
                        </SwitchLabel>
                        <SwitchDescription class="text-sm text-gray-500">
                          Pharetra morbi dui mi mattis tellus sollicitudin
                          cursus pharetra.
                        </SwitchDescription>
                      </div>
                      <Switch
                        v-model="privateAccount"
                        :class="[
                          privateAccount ? 'bg-teal-500' : 'bg-gray-200',
                          'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            privateAccount ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                          ]"
                        />
                      </Switch>
                    </SwitchGroup>
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
                          Allow commenting
                        </SwitchLabel>
                        <SwitchDescription class="text-sm text-gray-500">
                          Integer amet, nunc hendrerit adipiscing nam. Elementum
                          ame
                        </SwitchDescription>
                      </div>
                      <Switch
                        v-model="allowCommenting"
                        :class="[
                          allowCommenting ? 'bg-teal-500' : 'bg-gray-200',
                          'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            allowCommenting ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                          ]"
                        />
                      </Switch>
                    </SwitchGroup>
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
                          Allow mentions
                        </SwitchLabel>
                        <SwitchDescription class="text-sm text-gray-500">
                          Adipiscing est venenatis enim molestie commodo eu
                          gravid
                        </SwitchDescription>
                      </div>
                      <Switch
                        v-model="allowMentions"
                        :class="[
                          allowMentions ? 'bg-teal-500' : 'bg-gray-200',
                          'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            allowMentions ? 'translate-x-5' : 'translate-x-0',
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

<script setup>
import { ref } from 'vue';
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue';


const availableToHire = ref(true);
const privateAccount = ref(false);
const allowCommenting = ref(true);
const allowMentions = ref(true);
</script>
