<template>
    <header
      class="w-full bg-green-600 dark:bg-dark border-t-4 border-green-600 body-font fixed z-50 shadow"
    >
      <div
        class="container max-w-screen-lg mx-5 flex flex-wrap py-4 md:py-5 lg:py-5 flex-col md:flex-row items-center md:px-5 text-gray-600"
      >
        <NuxtLink
          to="/"
          class="text-gray-900 flex title-font font-medium items-center cursor-pointer mb-2 md:mb-0"
        >
          <span class="text-xl dark:hover:text-gray-400 hover:text-gray-900">
            Eyüp Kaan Özteriş
          </span>
        </NuxtLink>
        <nav
          class="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
        >
          <NuxtLink
            to="/about"
            class="mr-5 cursor-pointer text-gray-900"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="mr-5 cursor-pointer text-gray-900"
          >
            Contact
          </NuxtLink>
          <a
            class="mr-5 cursor-pointer text-gray-900"
          >
            Blog
            <span
              class="inline-flex items-center ml-1 px-2 rounded-full text-xs leading-4 bg-green-200 text-green-700"
            >
              Soon
            </span>
          </a>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  
  export default {
    components: {
    },
  }
  </script>