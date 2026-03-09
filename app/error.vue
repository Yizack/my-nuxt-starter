<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-default">
    <div class="rounded-md bg-elevated p-10 shadow-lg border border-accented">
      <h1 class="text-4xl font-bold text-primary mb-2">Error {{ error.status }}</h1>
      <h5>error_occurred: {{ error.message || error.statusText || "error" }}</h5>
      <span>go_back: <ULink to="/" class="underline">{{ SITE.domain }}</ULink></span>
    </div>
  </div>
</template>
