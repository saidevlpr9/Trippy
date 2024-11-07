import * as React from 'react';
import "../App.css"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div className='flex justify-center items-center'>
      <div className="bg-black   text-white w-1/2 ">
        {/* Accordion for FAQ 1 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h2 className="text-lg font-semibold m-2">1. What is Trippy, and how does it work?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Trippy is a travel companion app designed to make your trips easier and more memorable. It helps you plan and book activities, accommodations, and transportation all in one place. The app suggests experiences tailored to your preferences, whether you're traveling solo, with friends, family, or a partner.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 2 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h2 className="text-lg font-semibold m-2">2. Is Trippy free to use?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Yes, Trippy offers a free version with core features available to all users. For additional perks like exclusive deals and premium travel recommendations, you can subscribe to Trippy Premium.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 3 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h2 className="text-lg font-semibold m-2">3. How does Trippy choose the recommendations?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Trippy uses advanced algorithms and local insights to curate experiences based on your interests and trip type. Our goal is to ensure your time and preferences are reflected in each suggestion, making every trip uniquely yours.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 4 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <h2 className="text-lg font-semibold m-2">4. Can I book activities and accommodations directly through Trippy?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Absolutely! You can browse and book activities, hotels, and transportation directly through the app. Trippy partners with top providers to offer you secure and reliable booking options at the best rates.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 5 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <h2 className="text-lg font-semibold m-2">5. How do I share my itinerary with friends or family?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Trippy makes it easy to share your plans. With a single tap, you can send your itinerary via email or a link, making it accessible to friends and family for easy collaboration and updates.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 6 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            <h2 className="text-lg font-semibold m-2">6. Does Trippy work offline?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Yes, Trippy has offline support for viewing your itinerary, maps, and saved recommendations, so you can explore without needing constant internet access.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 7 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            <h2 className="text-lg font-semibold m-2">7. How can I contact Trippy customer support?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              If you need assistance, our customer support team is available 24/7 via chat within the app or email. We're here to help with any issues or questions you may have.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 8 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel8-content"
            id="panel8-header"
          >
            <h2 className="text-lg font-semibold m-2">8. Can I use Trippy for last-minute bookings?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Yes, Trippy accommodates spontaneous travelers! You can find and book last-minute experiences and accommodations through the app, tailored to your immediate needs.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 9 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel9-content"
            id="panel9-header"
          >
            <h2 className="text-lg font-semibold m-2">9. Is my data safe with Trippy?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We take data security seriously. Trippy uses advanced encryption to protect your personal information and booking details, ensuring a secure experience.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for FAQ 10 */}
        <Accordion sx={{ backgroundColor: 'black', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel10-content"
            id="panel10-header"
          >
            <h2 className="text-lg font-semibold m-2">10. Does Trippy offer group booking options?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Yes, we offer special features for group trips, allowing you to manage bookings and share itineraries easily with your travel companions.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
