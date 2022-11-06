<script lang="tsx">
import { onBeforeMount, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'Redirect',
  setup() {
    const route = useRoute()
    const router = useRouter()
    onBeforeMount(() => {
      let { fullPath, query } = route
      fullPath = fullPath.replace('/redirect', '')
      router.replace({ path: fullPath, query })
    })
    return () => <div></div>
  },
})
</script>
