<script lang="ts">
import Container from '@/components/Container.vue';
import FlexRow from '@/components/FlexRow.vue';
import { CircleCloseFilled } from '@element-plus/icons-vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    FlexRow,
    Container,
    CircleCloseFilled,
  },
  props: {
    resource: {
      type: String,
      required: false,
    },
  },
})
export default class NotFound extends Vue {
  resource?: string;

  get message(): string {
    return `The ${this.resource ?? 'page'} you are looking for is not there`;
  }
}
</script>

<template>
  <Container>
    <FlexRow
      :style="{ paddingTop: '200px' }"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      <el-icon :size="50" color="var(--el-color-danger)">
        <CircleCloseFilled />
      </el-icon>
      <div :style="{ width: '400px' }">
        <h1>Oops!</h1>
        <h3>{{ message }}</h3>
        <h4>
          <router-link :to="{ name: 'PokemonList' }">Click here</router-link>
          &nbsp;to redirect back to the pokemon list
        </h4>
      </div>
    </FlexRow>
  </Container>
</template>
