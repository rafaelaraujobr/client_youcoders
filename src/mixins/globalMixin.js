import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
    methods: {
        ...mapActions("Auth", ["ActionSetUser", "ActionSetToken", "ActionSetRows"]),
        ...mapActions(["ActionSetSearch", "ActionSetRows", "ActionSetHistories", "ActionAddHistory", "ActionRemoveHistory"]),
        getInitialName(name) {
            return name.split(' ').slice(0, 2).map(item => item.substr(0, 1).toUpperCase()).join('')
        },
        errorNotify(errorMessage) {
            let error = errorMessage.response
                ? errorMessage.response.data
                : errorMessage;
            if (error.message) error = error.message;
            this.$q.notify({
                type: "warning",
                position: "top-right",
                timeout: 1500,
                icon: "announcement",
                message: error,
                html: false,
                textColor: "white",
            });
        },
        successNotify(showMessage) {
            this.$q.notify({
                type: "positive",
                position: "bottom-right",
                timeout: 1500,
                message: showMessage,
            });
        },
        onLoading(value) {
            if (value)
                this.$q.loading.show({
                    spinnerColor: "primary",
                    spinnerSize: 100,
                    message: "Carregando...",
                    messageColor: "white",
                });
            else this.$q.loading.hide();
        },
        async getSearch() {
            this.ActionAddHistory({ value: this.search, created_at: new Date() });
            this.onLoading(true)
            try {
                const { data } = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.search}&key=${this.google_api_key}&maxResults=50`
                );
                if (data) {
                    this.ActionSetRows(data.items)
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.onLoading(false)
            }
        },
    },
    computed: {
        ...mapGetters("Auth", ["user", "google", "google_api_key"]),
        ...mapGetters(["search", "rows", "histories"]),
        isMobile() {
            return (
                this.$q.platform.is.mobile ||
                this.$q.screen.height > this.$q.screen.width
            );
        },
        isDark() {
            return this.$q.dark.isActive;
        },
    },
};
