<script setup lang="ts">
defineProps<{
  modelValue: {
    isVisible: boolean;
    show: (callback?: VoidFunction) => Promise<void>;
    hide: VoidFunction;
  };
  id: string;
  title?: string;
  lg?: boolean;
  fullscreen?: boolean;
}>();
</script>

<template>
  <div v-if="modelValue.isVisible" :id="id" class="modal fade" data-bs-backdrop="static" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" :class="{ 'modal-lg': lg, 'modal-fullscreen': fullscreen }">
      <div class="modal-content">
        <div v-if="title" class="modal-header">
          <h1 id="modalLabel" class="modal-title fs-5">{{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div class="modal-body">
          <slot />
          <div v-if="!title" class="position-absolute end-0 top-0 m-2">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
