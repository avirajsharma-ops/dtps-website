"use client";

import Image from "next/image";

type CycleItem = {
  title: string;
  desc: string;
  iconSrc: string;
  iconClass: string;
  textClass: string;
};

const cycles: CycleItem[] = [
  {
    title: "Detoxification",
    desc: "This initial phase gently cleanses your body",
    iconSrc:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Mask-group-2.svg",
    iconClass: "mwg-i-top",
    textClass: "mwg-top-text",
  },
  {
    title: "Anti-Inflammatory Detox",
    desc: "Anti-inflammatory foods to reduce inflammation",
    iconSrc:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Mask-group-3.svg",
    iconClass: "mwg-i-top-right",
    textClass: "mwg-top-right-text",
  },
  {
    title: "Fat Burning",
    desc: "With a dynamic cycle focused on maximizing fat burning",
    iconSrc:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Mask-group-4.svg",
    iconClass: "mwg-i-bottom-right",
    textClass: "mwg-bottom-right-text",
  },
  {
    title: "Metabolic Booster",
    desc: "Rev up your metabolism with our metabolic booster cycle",
    iconSrc:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Mask-group-5.svg",
    iconClass: "mwg-i-bottom-left",
    textClass: "mwg-bottom-left-text",
  },
  {
    title: "Maintenance And Progression",
    desc: "Celebrate your success and maintain your weight loss",
    iconSrc:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Mask-group-6.svg",
    iconClass: "mwg-i-top-left",
    textClass: "mwg-top-left-text",
  },
];

export default function FiveCycleProgram() {
  return (
    <section className="mwg-five-cycle">
      <h2 className="mwg-title">Our Five-Cycle Program</h2>
      <p className="mwg-subtitle">
        Fueled by delicious ghar ka khana, targets weight loss
      </p>

      <div className="mwg-circle-wrapper">
        <div className="mwg-dotted-circle" />

        {cycles.map((c) => (
          <div key={c.title}>
            <Image
              className={`mwg-icon-img ${c.iconClass}`}
              src={c.iconSrc}
              alt={c.title}
              width={100}
              height={100}
            />

            <div className={`mwg-t ${c.textClass}`}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS INSIDE COMPONENT (NO EXTRA FILE NEEDED) */}
      <style jsx>{`
        .mwg-five-cycle {
          background: #0d564b;
          padding: 80px 20px 30px;
          color: #fff;
          text-align: center;
          border-radius: 25px;
        }

        .mwg-title {
          font-size: 40px;
          font-weight: 700;
          color: #fff !important;
        }

        .mwg-subtitle {
          opacity: 0.7;
          margin-bottom: 40px;
        }

        .mwg-circle-wrapper {
          position: relative;
          width: 650px;
          height: 650px;
          margin: 0 auto;
        }

        .mwg-dotted-circle {
          width: 360px;
          height: 360px;
          border: 3px dashed rgba(255, 255, 255, 0.45);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Next/Image needs :global for class styling */
        :global(.mwg-icon-img) {
          width: 100px;
          height: 100px !important;
          background: #fff;
          border: 4px solid #f5a623 !important;
          border-radius: 50% !important;
          padding: 18px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.25) !important;
          position: absolute !important;
          object-fit: contain;
        }

        /* ICON POSITIONS */
        :global(.mwg-i-top) {
          top: 14%;
          left: 52%;
          transform: translateX(-50%);
        }
        :global(.mwg-i-top-right) {
          top: 33%;
          left: 76%;
          transform: translateX(-50%);
        }
        :global(.mwg-i-bottom-right) {
          top: 60%;
          left: 70%;
          transform: translateX(-50%);
        }
        :global(.mwg-i-bottom-left) {
          top: 64%;
          left: 35%;
          transform: translateX(-50%);
        }
        :global(.mwg-i-top-left) {
          top: 35%;
          left: 23%;
          transform: translateX(-50%);
        }

        /* TEXT BOXES */
        .mwg-t {
          position: absolute;
          width: 260px;
          color: #fff;
        }

        .mwg-t h3 {
          margin-bottom: 5px;
          font-size: 24px;
          font-weight: 600;
          color: #fff;
        }

        .mwg-t p {
          font-size: 16px;
          opacity: 0.8;
          line-height: 1.4;
        }

        /* TEXT POSITIONS */
        .mwg-top-text {
          top: 0%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .mwg-top-right-text {
          top: 30%;
          left: 107%;
          transform: translateX(-50%);
          text-align: left;
        }

        .mwg-bottom-right-text {
          top: 63%;
          left: 100%;
          transform: translateX(-50%);
          text-align: left;
        }

        .mwg-bottom-left-text {
          top: 65%;
          left: 4%;
          transform: translateX(-50%);
          text-align: right;
        }

        .mwg-top-left-text {
          top: 35%;
          left: -7%;
          transform: translateX(-50%);
          text-align: right;
        }

        @media (max-width: 768px) {
          .mwg-circle-wrapper {
            width: 350px;
            height: 350px;
          }

          .mwg-dotted-circle {
            width: 220px;
            height: 220px;
          }

          :global(.mwg-icon-img) {
            width: 42px;
            height: 42px !important;
            padding: 10px;
          }

          :global(.mwg-i-top) {
            top: 2%;
            left: 50%;
          }
          :global(.mwg-i-top-right) {
            top: 20%;
            left: 90%;
          }
          :global(.mwg-i-bottom-right) {
            top: 70%;
            left: 80%;
          }
          :global(.mwg-i-bottom-left) {
            top: 70%;
            left: 20%;
          }
          :global(.mwg-i-top-left) {
            top: 20%;
            left: 10%;
          }

          .mwg-t {
            position: relative;
            width: 100%;
            left: 0 !important;
            top: auto !important;
            transform: none !important;
            margin-top: 20px;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
