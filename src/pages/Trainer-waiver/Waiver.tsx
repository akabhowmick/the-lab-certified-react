import "./Waiver.css"
export const waiver = () => {
  return (
    <div>
      <section className="waiver-wrapper">
        <div className="waiver-header">
          <h1>The Lab E-Waiver</h1>
          <h2>(Every player must complete)</h2>
          <p>Please read carefully below</p>
        </div>
        <div className="terms">
          <p>
            In consideration of being permitted to participate in The Lab activities, including the
            training, use of various facilities or equipment and or participation in any way in the
            various basketball clinics, conditioning, games and all related activities the
            participant for himself or herself and any personal representatives hereby agrees to the
            following:{" "}
          </p>
          <ol>
            <li>
              The participant hereby releases, waives, discharges and agrees not to sue The Lab, its
              staff, it's board, or members. Herein and after referred to as released parties from
              any and all liability to the undersigned for any loss of damage and any claims or
              demands therefore on account of injury to the person or property.
            </li>
            <li>
              The participant hereby agrees to indemnify and save and hold harmless the released
              parties and each of them for any loss, liability, damage, injury, sickness or cost
              they may incur due to the participation of the participant in the above basketball
              training activities directed by The Lab facilities in person or online.
            </li>
            <li>
              The participant hereby assumes full responsibility for risk of bodily injury, death,
              or property damage while participating in the above basketball training activities
              directed and or conducted by The Lab in person or online.
            </li>
            <li>
              The participant is aware that the participation in athletic activities presents a risk
              of physical harm or illness while participating in the above basketball training
              activities directed and or conducted by The Lab facilities in person or online.
            </li>
            <li>
              I understand by signing this document I am waiving legal rights I may have against The
              Lab and its staff, members, affiliates or representatives in reference to
              participating in activities despite injury, illness or death. I will follow all
              policies directed by The Lab that are put in place for my safety to minimize
              contraction of diseases or risk of injury.
            </li>
            <li>
              I grant permission to The Lab, and its agents and employees, to use photographs, video
              images and audio taken of me at any facility or function for use in any and all
              marketing, public relations and advertising mediums used by The Lab, and to use such
              photographs, video images and audio in electronic versions of the same for any and all
              media distributions without notifying me.
            </li>
            <li>
              I hereby waive any right to inspect or approve the finished photographs, video images
              or audio or printed or electronic matter that may be used in conjunction with them now
              or in the future, whether that use is known to me or unknown, and I waive any right to
              royalties or other compensation arising from or related to the use of the photographs,
              video images and audio.
            </li>
            <li>
              I hereby agree to release, defend and hold harmless The Lab and its agents and
              employees, including any firm publishing and/or distributing the finished product in
              whole or in part, whether on paper, via electronic media, social media, or on web
              sites, from and against any claims, damages or liability arising from or related to
              the use of the photographs, video images or audio, including but not limited to any
              misuse, distortion, blurring, alteration, optical illusion or use in composite form,
              either intentionally or otherwise, that may occur or be produced in taking,
              processing, reduction or production of the finished product, its publication or
              distribution. I am 18 years of age or older and I am competent to contract in my own
              name.
            </li>
            <li>
              I have read this release before signing below, and I fully understand the contents,
              meaning and impact of this release. I understand that I am free to address any
              specific questions regarding this release by submitting those questions in writing
              prior to signing, and I agree that my failure to do so will be interpreted as a free
              and knowledgeable acceptance of the terms of this release.
            </li>
          </ol>
        </div>
      </section>
      <section className="form">
        <form action="">
          <p>
            Completion of this waiver DOES NOT guarantee class participation. SESSIONS MUST FIRST BE
            VERIFIED. <br />I hereby affirm that I am of sound mind and have carefully read the JQ
            Basketball Training Release & Waiver of Liability document and understand its contents.
            I am aware this document is a release of all liability and a contract enforceable
            against me in a court of law. I have signed this document of my own free will.
          </p>
          <div className="form-wrapper">
            <div className="form-info">
              <div className="first">
                <label htmlFor="first">Player First Name</label> <br />
                <input type="text" id="first" />
              </div>
              <div className="last">
                <label htmlFor="last">Player Last Name</label> <br />
                <input type="text" id="last" />
              </div>
            </div>

            <div className="form-info">
              <div className="email">
                <label htmlFor="email">Email*</label> <br />
                <input type="email" id="first" required />
              </div>
              <div className="last">
                <label htmlFor="dateOfBirth">Date of Birth</label> <br />
                <input type="text" id="dateOfBirth" />
              </div>
            </div>

            <div className="form-info">
              <div className="parent-info">
                <label htmlFor="first">Parent First Name</label> <br />
                <input type="text" id="first" />
              </div>
              <div className="last">
                <label htmlFor="last">Parent Last Name</label> <br />
                <input type="text" id="last" />
              </div>
            </div>

            <div className="form-info">
              <div className="emergency">
                <label htmlFor="emergency">
                  Emergency Contact <br />
                  (First Name/Last Name)
                </label>{" "}
                <br />
                <input type="text" id="emergency" />
              </div>
              <div className="phone">
                <label htmlFor="phone">Emergency Contact Phone</label> <br />
                <input type="text" id="phone" />
              </div>
            </div>

            <div className="waiver-box">
              <input type="checkbox" name="check" id="check" />
              <p>
                I hereby acknowledge this release from liability for accidental injury or illness
                which I may incur as a result of participating in any physical activity. I hereby
                assume all risks connected therewith and consent to participate in this program. I
                agree to disclose my physical limitations, disabilities, ailments, or impairments
                which may affect my ability to participate in this program.
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

