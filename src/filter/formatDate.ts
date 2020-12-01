import { Vue } from "vue-property-decorator";
import { format } from "date-fns";

export default Vue.filter("formatDate", function(
  value: number,
  formatDate: string,
) {
  return format(value, formatDate);
});
