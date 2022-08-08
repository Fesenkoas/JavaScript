import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import Text from "./Text";

const Main = ({ s }) => {
  return (
    <main>
      <SectionLeft s={s} />
      <SectionRight s={s} />
      <Text s={s} />
    </main>
  );
};

export default Main;
