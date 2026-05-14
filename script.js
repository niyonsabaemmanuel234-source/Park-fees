
  // show calculator
  function openCalculator() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("calculatorPage").style.display = "block";
  }

  // go back to welcome
  function goBack() {
    document.getElementById("calculatorPage").style.display = "none";
    document.getElementById("welcomePage").style.display = "flex";
  }

  // pricing data
  const pricing = {
    volcanoes: {
      citizen: 15000,
      eac: 30000,
      foreigner: 150000
    },
    nyungwe: {
      citizen: 10000,
      eac: 20000,
      foreigner: 100000
    },
    akagera: {
      citizen: 8000,
      eac: 15000,
      foreigner: 75000
    }
  };

  function calculateFee() {
    const park = document.getElementById("park").value;
    const residency = document.getElementById("residency").value;
    const visitors = parseInt(document.getElementById("visitors").value);

    if (!park || !residency || !visitors || visitors <= 0) {
      alert("Please fill all fields correctly!");
      return;
    }

    const price = pricing[park][residency];
    const subtotal = price * visitors;
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    document.getElementById("pricePerPerson").innerText =
      "Price per Person: " + price.toLocaleString() + " RWF";

    document.getElementById("subtotal").innerText =
      "Subtotal: " + subtotal.toLocaleString() + " RWF";

    document.getElementById("tax").innerText =
      "Tax (18%): " + tax.toLocaleString() + " RWF";

    document.getElementById("total").innerText =
      "Total Cost: " + total.toLocaleString() + " RWF";

    document.getElementById("result").style.display = "block";
  }