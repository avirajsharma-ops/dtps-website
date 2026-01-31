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

      {/* Desktop Layout */}
      <div className="mwg-circle-wrapper mwg-desktop">
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

      {/* Mobile Layout - Simple list */}
      <div className="mwg-mobile-list">
        {cycles.map((c, index) => (
          <div key={c.title} className="mwg-mobile-item">
            <div className="mwg-mobile-icon-wrapper">
              <Image
                className="mwg-mobile-icon"
                src={c.iconSrc}
                alt={c.title}
                width={50}
                height={50}
              />
            </div>
            <div className="mwg-mobile-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS INSIDE COMPONENT */}
      <style jsx>{`
        .mwg-five-cycle {
          background: #0d564b;
          padding: 60px 20px 40px;
          color: #fff;
          text-align: center;
          border-radius: 25px;
        }

        .mwg-title {
          font-size: 28px;
          font-weight: 700;
          color: #fff !important;
          margin-bottom: 10px;
        }

        .mwg-subtitle {
          opacity: 0.7;
          margin-bottom: 30px;
          font-size: 14px;
        }

        /* Desktop Circle Layout - Hidden on mobile */
        .mwg-desktop {
          display: none;
        }

        /* Mobile List Layout */
        .mwg-mobile-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 100%;
          padding: 0 10px;
        }

        .mwg-mobile-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          text-align: left;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 15px;
        }

        .mwg-mobile-icon-wrapper {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #f5a623;
        }

        :global(.mwg-mobile-icon) {
          width: 30px !important;
          height: 30px !important;
          object-fit: contain;
        }

        .mwg-mobile-content h3 {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 5px;
        }

        .mwg-mobile-content p {
          font-size: 13px;
          opacity: 0.8;
          line-height: 1.4;
          margin: 0;
        }

        @media (min-width: 769px) {
          .mwg-five-cycle {
            padding: 80px 20px 30px;
          }

          .mwg-title {
            font-size: 40px;
          }

          .mwg-subtitle {
            font-size: 16px;
            margin-bottom: 40px;
          }

          .mwg-mobile-list {
            display: none;
          }

          .mwg-desktop {
            display: block;
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
        }
      `}</style>
    </section>
  );
}
