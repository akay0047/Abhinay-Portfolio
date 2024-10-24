/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "SemConv: Deep Learning for Emotion Decoding in Autism Individuals using CNN",
    authors:
      "Abhinay Chaukade, Dr. Meenakshi K.",
    conferences:
      "3rd 2024 IEEE World Conference on Applied Intelligence and Computing (AIC  2024)",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "This research addresses advancements in medical decision support systems aimed at overcoming challenges in neuroscience, specifically for individuals with Autism Spectrum Disorder. This technology utilizes the convolution neural network for efficiently analyzing the neural activities of individuals suffering from ASD (Autism Spectrum Disorder), which is a functional disorder occurring due to neural oscillatory misfunctioning. The proposed technology will work to detect the EEG signals in ASD individual. Applying learned filters can be able to analyze and inspect the part of the EEG spectrum that is being utilized for reading and decoding the emotions [1].",
    absbox: "absPopup1",
  },

  {
    title: "Finding and Matching Lost Victims using AI-ML",
    authors:
      "Abhinay Chaukade",
    conferences:
      "International Journal for Research in Applied Science & Engineering Technology (IJRASET), Volume 10 Issue VII July 2022",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "In today’s virtually and technologically evolving world, technology is being used for ease of human efforts and for faster results. Appropriate security upgrade and enhancements are required to be balanced so that the users can rely and trust their personal information on these technologies. Simultaneously, persons who goes missing if found also, there’s no way to identify if it’s the actual person or not. Also, many people don’t try to help in these matters concerning about their life safety from goons and mafias because many missing cases occurs from kidnapping and abduction etc. So, in this paper we are proposing and fabricating a project that will help to resolve such type of incidences.",
    absbox: "absPopup2",
  },

  {
    title:
      "Song Recommendation using Facenet Emotion technology",
    authors: "Abhinay Chaukade, Hannah S.",
    conferences:
      "International Journal for Research in Applied Science & Engineering Technology (IJRASET), Volume 10 Issue III Mar 2022",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "In today’s technological revolving era, everyday new types of technologies are being discovered. Various types of technologies, devices, softwares etc. are being introduced daily. According to the experts the facial expression is derived from the internal biological motions of the muscles that lie under the skin. It also deprives the emotional state of the person. But, in this world where communication has become an important thing, the facial expression is the mean of the non-verbal communication, by which we can understand the current behaviour of the person without even uttering single word. For recognition of an individual’s mood, the system uses Facial Expression Recognition (FER) concept and depending on the recognized mood, song is played.",
    absbox: "absPopup3",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
