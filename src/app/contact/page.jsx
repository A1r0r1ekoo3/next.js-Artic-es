import Link from "next/link";

function ContactPage() {
  return (
    <div className="prose">
      <h3 className="text-2xl font-semibold text-sky-700">Contact</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quas
        perferendis pariatur nemo recusandae, atque odit neque distinctio
        suscipit, rem in odio quibusdam excepturi quam voluptates asperiores hic
        ducimus. Alias, a autem.
      </p>
      <div className="flex items-center gap-4">
        <Link href="/contact/faq" className="btn btn-primary">
          Faq
        </Link>
        <Link href="/contact/form" className="btn btn-primary">
          Form
        </Link>
      </div>
    </div>
  );
}

export default ContactPage;
