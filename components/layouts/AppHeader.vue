<template>
  <div class="bg-white">
    <header class="relative bg-white">
      <p class="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>

      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center">
            <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <!-- Logo -->
            <div class="flex lg:ml-0">
              <nuxt-link :to="{ name: 'index'}">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="">
              </nuxt-link>
            </div>

            <!-- Flyout menus -->
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
                <nuxt-link :to="{ name: 'collections'}" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                  All Collections
                </nuxt-link>
                <nuxt-link :to="{ name: 'products'}" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                  All Products
                </nuxt-link>

                <nuxt-link :to="{ name: 'order-summary'}" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                  Order Summary
                </nuxt-link>

                <nuxt-link :to="{ name: 'checkout'}" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                  Checkout
                </nuxt-link>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <nuxt-link :to="{ name: 'auth-login'}" class="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Sign in
                </nuxt-link>
                <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
              </div>

              <div class="hidden lg:ml-8 lg:flex">
                <a href="#" class="text-gray-700 hover:text-gray-800 flex items-center">
                  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="w-5 h-auto block flex-shrink-0">
                  <span class="ml-3 block text-sm font-medium"> CAD </span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <!-- Heroicon name: outline/search -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 p-2 flex items-center">
                  <!-- Heroicon name: outline/shopping-bag -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
              <user-profile-dropdown />
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import UserProfileDropdown from '../UserProfileDropdown.vue'
export default {
  components: { UserProfileDropdown }

}
</script>

<style>

</style>
