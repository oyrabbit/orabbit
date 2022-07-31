<template>
  <aside class="app-sidebar-right">
    <div class="container">
      <SidebarPanel id="sider1" title="目录">
        <div
          class="indent"
          :key="anchor.indent"
          v-for="anchor in titles"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
          @click="handleAnchorClick(anchor)"
        >
          <a style="cursor: pointer">{{ anchor.title }}</a>
        </div>
      </SidebarPanel>
    </div>
  </aside>
</template>
<script setup>
import { ref, watch, onUpdated } from 'vue'
import { defineProps } from 'vue'
const props = defineProps({
  preview: {
    type: Object,
  },
})
const titles = ref([])

onUpdated(() => {
  watch(props, () => {
    const anchors =
      props.preview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
    // const anchors = document.querySelector('v-md-editor-preview').querySelectorAll('h1,h2,h3,h4,h5,h6')

    const titlesData = Array.from(anchors).filter(
      (title) => !!title.innerText.trim()
    )

    if (!titlesData.length) {
      titles.value = []
      return
    }

    const hTags = Array.from(
      new Set(titlesData.map((title) => title.tagName))
    ).sort()

    titles.value = titlesData.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }))
  })
})

const handleAnchorClick = (anchor) => {
  const { lineIndex } = anchor

  const heading = props.preview.value.$el.querySelector(
    `[data-v-md-line="${lineIndex}"]`
  )

  if (heading) {
    props.preview.value.scrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60,
    })
  }
}
</script>
<style scoped lang="scss">
.app-sidebar-right {
  width: 300px;
  height: auto;
  #sider1,
  #sider2 {
    li {
    }
  }
}
</style>
