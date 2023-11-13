import Advice from "./Advice/Advice";
import Collections from "./Collections/Collections";
import Design from "./Design/Design";
import Essentials from "./Essentials/Essentials";
import Moments from "./Moments/Moments";
import Newsletter from "./Newsletter/Newsletter";

export default function Main() {
    return(
        <main>
            <Collections />
            <Essentials />
            <Design />
            <Advice />
            <Newsletter />
            <Moments />
        </main>
    )
}