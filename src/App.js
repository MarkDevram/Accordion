import "./styles.css"
import { useState } from "react"
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
]

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  )
}

function Accordion({ faqs }) {
  return (
    <div className="content-box ">
      {faqs.map((faq, i) => {
        return <AccordionItem faq={faq} number={i} />
      })}
    </div>
  )
}
function AccordionItem({ faq, number }) {
  const [isOpen, setIsopen] = useState(false)
  function openHanlder() {
    setIsopen(!isOpen)
  }
  return (
    <div
      className={` item accordion ${isOpen ? "open" : ""}`}
      onClick={() => {
        openHanlder()
      }}
    >
      <p className="number">{`0${number + 1}`}</p>
      <p className=" title text">{faq.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{faq.text}</div> : ""}
    </div>
  )
}
