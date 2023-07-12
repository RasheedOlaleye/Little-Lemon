import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div>
        <section  id="about"
    aria-label="Testimonial"
    className="w-1280 h-100 flex  mb-5 items-start flex-shrink-0 bg-[#f4ce14]"
  >
        <div className="mx-auto max-w-screen-xl px-3 py-5 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
            <TestimonialCard
              image="https://unsplash.com/photos/n4KewLKFOZw"
              name="Paul Starr"
              role="Testimonial"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus."
            />

            <TestimonialCard
              image="https://unsplash.com/photos/6xv4A1VA1rU"
              name="John Doe"
              role="Customer"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos veniam voluptatum repellendus autem exercitationem."
            />

            <TestimonialCard
              image="https://unsplash.com/photos/JyVcAIUAcPM"
              name="Jane Smith"
              role="Client"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem distinctio ad deserunt vel quos!"
            />

         
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
