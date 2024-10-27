while True:
    a = int(input("Enter the val : "))
    sc = int(a*0.25)
    print("serviceCharge = ", sc)
    gst = int(sc*0.05)
    print("GSTCharge = ", gst)
    gt = int(a+sc+gst)
    print("GrandTotal = ", gt)
    print("\n\n")

