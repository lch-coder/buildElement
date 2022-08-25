import { onBeforeMount, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'redirect',
  setup() {
    const route = useRoute()
    const router = useRouter()
    onBeforeMount(() => {
      const { params, query } = route
      const { path } = params
      let paths = ''
      if (path && path.length > 0) {
        paths = (path as string[]).join('/')
      }
      router.replace({ path: '/' + paths, query })
    })
  },
  render() {
    return h(<></>, {}, <div></div>)
  },
})
