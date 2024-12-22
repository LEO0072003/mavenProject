import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Navbar2 from "../Common/Navbar2";
import PDSec1 from "../components/Packagedetail/PDSec1";
import PDSec2 from "../components/Packagedetail/PDSec2";
import PDSec3 from "../components/Packagedetail/PDSec3";
import PdSec1Animation from "../components/Packagedetail/PdSec1Animation";
import { useNavigate, useParams } from "react-router-dom";
import { TOP_PACKAGES } from "../Data/Home";
import Homesec5 from "../components/Homesec5";
import { ImCross } from "react-icons/im";
import emailjs from "@emailjs/browser";
import Footer from "../Common/Footer";
import Footer2 from "../Common/Footer2";
import toast from "react-hot-toast";

function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [packageView, setPackageView] = useState(null);
  const [openform, setOpenform] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Validation logic
    const formElements = form.current.elements;
    const errors = [];

    if (!formElements.from_name.value.trim()) {
      errors.push("Full Name is required.");
    }

    if (!formElements.from_email.value.trim()) {
      errors.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(formElements.from_email.value.trim())) {
      errors.push("Enter a valid email address.");
    }

    if (!formElements.from_number.value.trim()) {
      errors.push("Phone Number is required.");
    }

    if (!formElements.from_travel.value.trim()) {
      errors.push("Travel Date is required.");
    }

    if (!formElements.from_duration.value.trim()) {
      errors.push("Duration is required.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n")); // You can customize the error display as needed.
      return;
    }

    emailjs
      .sendForm("service_v2wateq", "template_cj1kbsn", form.current, {
        publicKey: "teMT0rnZ9JGkmP7O5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Successfuly Send");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong");
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const packageView = TOP_PACKAGES.find((pkg) => pkg.id === parseInt(id));

    if (!packageView) {
      navigate("/");
    } else {
      setPackageView(packageView);
    }
  }, [id, navigate]);

  const [isInView2, setIsInView2] = useState(true);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView2(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Change this value as needed
      }
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);

  return (
    <section className="packageWrap">
      <Navbar2 />

      <div className="pacakageWrapCont">
        <PDSec1 />

        <PdSec1Animation />

        <PDSec2
          setOpenform={setOpenform}
          packageView={packageView}
          isInView2={isInView2}
        />

        <PDSec3 packageView={packageView} sectionRef2={sectionRef2} />

        <Homesec5 />
      </div>

      <Footer />
      <Footer2 />
    </section>
  );
}

export default PackageDetail;
