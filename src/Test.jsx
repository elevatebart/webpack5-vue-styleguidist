import { defineComponent } from "vue";

export default defineComponent({
  props:{
    name: {
      type: String,
      default: "Test"
    }
  },
  setup(){
    return function Test(props) {
      return <div>{props.name}</div>;
    }
  }
})