interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageLink: string;
  blogLink: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, role, quote, imageLink, blogLink } = testimonial;

  const cardStyle = {
    width: '900px',
    border: '1px solid #000',
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
  };

  const rightColumnStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the elements in the right column
    textAlign: 'center', // Center-align the text
  };
  const imageStyle = {
    maxWidth: '150px', // Set the maximum width for the image
    maxHeight: '150px', // Set the maximum height for the image
    borderRadius: '50%', // Maintain rounded shape
  };

  return (
    <div className="m-auto p-8" style={cardStyle}>
      <div style={leftColumnStyle}>
        <img
          src={imageLink}
          alt={name}
          className="rounded-full"
          style = {imageStyle}
        />
        <h3 className="text-zinc-400 text-2xl my-2">{name}</h3>
        <p className="text-zinc-300 text-sm mb-4">{role}</p>
      </div>
      <div style={rightColumnStyle}>
        <p className="text-zinc-300 text-xl my-2">{quote}</p>
        <a href={blogLink} target="_blank" rel="noopener noreferrer">
          <div className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10 hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
            
            <p className="text-white text-center font-bold">Blog</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
