<template>
    <section class="text-gray-900 border-b pb-11 bg-gray-300">
        <div
            class=" container max-w-screen-lg min-h-fit mx-auto my-auto  md:items-start md:text-left items-center py-32 pb-12 flex flex-col px-5">
            <h1 class="text-left text-3xl font-medium title-font text-gray-900">
                Contact Me
            </h1>
            <span class="block mt-1 w-10 h-1 bg-green-700"></span>

            <div class="border outline outline-offset-2 outline-green-700 rounded-xl bg-green-500 my-2 px-2 py-4">

                <form class="w-full" @submit.prevent="sendForm">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full md:w-1/2 px-4 mb-5">
                            <label for="fullName" class="block mb-2">
                                Full Name
                            </label>
                            <input id="fullName" name="fullName" type="text" required="required"
                                placeholder="Enter your full name" class="block w-full bg-gray-100 border rounded" />
                        </div>
                        <div class="w-full md:w-1/2 px-4 mb-5">
                            <label for="email" class="block mb-2 text-copy-primary">
                                E-mail
                            </label>
                            <input id="email" name="email" type="email" placeholder="Enter your e-mail"
                                required="required" class="block w-full bg-gray-100 border rounded" />
                        </div>
                        <div class="w-full px-4 mb-5">
                            <label for="message" class="block mb-2">
                                Message
                            </label>
                            <textarea id="message" name="message" rows="6" type="text"
                                placeholder="Enter your message..." required="required"
                                class="block w-full bg-gray-100 border rounded-sm"></textarea>
                        </div>
                    </div>
                    <div class="flex justify-end w-full">
                        <button type="submit" class="inline-flex shadow bg-gray-200 text-green-700 w-12 min-h-fit rounded">
                            Send
                        </button>
                    </div>
                </form>
                <h3 class="text-gray-100 mt-8 font-semibold mb-6">{{ message }}</h3>
            </div>
            
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            message: '',
        }
    },
    methods: {
        sendForm(e) {
            var data = new FormData(e.target)
            axios.post(
               'https://formspree.io/f/moqbealr', data
            )
            .then((response) => {
                this.message = 'Thank you for getting touch!'
                e.target.reset();
            })
            .then((response) =>{
                console.log(response)
            })
        }
    }
}
</script>


