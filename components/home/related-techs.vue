<template>
    <section class="border-b bg-gray-300">
        <div class="container max-w-screen-lg mx-auto py-6 px-2">
            <div class="md:items-start items-center flex w-full mb-4 flex-col">
                <h1 class="text-3xl font-medium leading-none title-font text-gray-900">
                    Related Techs
                </h1>
                <span class="mt-2 mb-4 w-10 h-1 bg-green-700"></span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div v-for="(tech, index) in techs" :key="index" class="flex items-center  hover:scale-110">
                    <div class="flex items-center justify-center rounded-xl">
                        <img class="h-12 w-12" :src="require(`@/public/techs-icons/${tech.icon}`)" :alt="tech.title" />
                    </div>
                    <div class="font-semibold mt-1">{{ tech.title }}</div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    data() {
        return {
            techs: [
                {
                    title: 'Java&Spring',
                    icon: 'spring-logo.svg'
                },
                {
                    title: 'Grails',
                    icon: 'grails.png'
                },
                {
                    title: 'Python',
                    icon: 'python-img.png'
                },
                {
                    title: 'Golang',
                    icon: 'golang.svg'
                },
                {
                    title: 'Postgres',
                    icon: 'postgres.svg'
                },
                {
                    title: 'MongoDB',
                    icon: 'mongodb.svg'
                },
                {
                    title: 'HTML',
                    icon: 'html.svg'
                },
                {
                    title: 'CSS',
                    icon: 'css.svg'
                },
                {
                    title: 'JavaScript',
                    icon: 'js.svg'
                },
                {
                    title: 'VueJS',
                    icon: 'vuejs.png'
                },
                {
                    title: 'Bootstrap',
                    icon: 'bootstrap.svg'
                },
                {
                    title: 'Tailwind',
                    icon: 'tailwind.svg'
                }
                
            ]
        }
    }

}
</script>