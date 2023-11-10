import Advice from "./Advice/Advice";
import Collections from "./Collections/Collections";
import Design from "./Design/Design";
import Essentials from "./Essentials/Essentials";

export default function Main() {
    return(
        <main>
            <Collections />
            <Essentials />
            <Design />
            <Advice />
        </main>
    )
}