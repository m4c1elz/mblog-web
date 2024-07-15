import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import ptbr from "dayjs/locale/pt-br"

dayjs.extend(relativeTime)
dayjs.locale(ptbr)

export { dayjs }
