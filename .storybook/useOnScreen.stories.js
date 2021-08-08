import { useState } from "react";
import { useOnScreen, Observer } from "../src/index";

export default {
  title: "reactjs-onscreen",
};

export const HookDemo = () => {
  const { ref, visible } = useOnScreen();

  return (
    <div style={{ width: 640, margin: "auto" }}>
      <header
        style={{
          backgroundColor: visible ? "green" : "tomato",
          width: "100%",
          color: "#fff",
          padding: "3px 10px",
          position: "sticky",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "monospace",
        }}
      >
        <h1>useOnScreen()</h1>

        <p>Scroll down</p>
      </header>
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>

      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>

      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>

      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>

      <div ref={ref} style={{ backgroundColor: "gold", width: "100%" }}>
        <h1>Hey I am here</h1>
      </div>

      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>

      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>
    </div>
  );
};

export const ComponentDemo = () => {
  const [visible, setVisible] = useState(false);

  const handleOnScreen = (p) => {
    console.log(p);
  };

  return (
    <div style={{ width: 640, margin: "auto" }}>
      <header
        style={{
          backgroundColor: visible ? "green" : "tomato",
          width: "100%",
          color: "#fff",
          padding: "3px 10px",
          position: "sticky",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "monospace",
        }}
      >
        <h1>{"<Observer />"}</h1>

        <p>Scroll down</p>
      </header>
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>

      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>

      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>

      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>

      <Observer
        onScreen={handleOnScreen}
        style={{ backgroundColor: "gold", width: "100%" }}
      >
        <h1>Hey I am here</h1>
      </Observer>

      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>

      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>
    </div>
  );
};
