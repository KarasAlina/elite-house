<template>
    <form  @submit="checkForm" class="popup-form feedback-form">
        <div class="feedback-form-row _v1">
            <div class="input-wrapper feedback-form__name">
                <label :for="name + '-name'" class="input-label">Ваше имя</label>
                <input type="text" :id="name + '-name'" class="input">
            </div>
            <div class="input-wrapper feedback-form__phone" :class="{'_error': errors}">
                <label :for="name + '-phone'" class="input-label">Номер телефона</label>
                <input 
                    type="tel" 
                    :id="name + '-phone'" 
                    v-model="phone"
                    class="input">
                <transition name="fade">
                    <div v-show="errors" class="input-error">{{ errors }}</div>
                </transition>
            </div>
        </div>
        <div class="feedback-form-row _v2">
            <input type="submit" class="button feedback-form__button" value="Перезвоните мне">
            <div class="feedback-privacy">
                Нажимая на кнопку «Перезвоните мне» вы соглашаетесь <br class="hidden-xs">с 
                <a href="/privacy-policy.pdf" target="_blank">политикой конфиденциальности</a>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        tag: String
    },
    data() {
        return {
            errors: '',
            phone: null
        }
    
  },
  methods: {
    checkForm: function (e) {
        if (!this.phone && !this.validEmail(this.phone)) {
            this.errors = 'Укажите номер телефона.';
        } else if (this.phone && !this.validEmail(this.phone)) {
            this.errors = 'Укажите корректный номер телефона.';
        } else {
            this.errors = ''
        }
        if (!this.errors) {
            return true;
        }
        e.preventDefault();
    },
    validEmail: function (phone) {
        var re = /^[+]?[0-9]{9,12}$/;
        return re.test(phone);
    }
  }
}
</script>

<style src="./FeedbackForm.sass" lang="sass"></style>