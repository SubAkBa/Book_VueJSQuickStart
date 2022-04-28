<template>
  <div>
    <search-item placeholder="두글자 이상 입력후 엔터!"></search-item>
    <contact-list></contact-list>
  </div>
</template>

<script>
import ContactList from './components/ContactList';
import SearchItem from './components/SearchItem';

export default {
  name: 'App',
  components: {
    ContactList,
    SearchItem
  }
}
</script>

<style>
</style>
