if (!b.client || b.client.toLowerCase() !== "jobs") {
    return false;
}

if (a === "view" && b.application === "employer") {
    if (b.application_view === "purchasePaymentSuccess") {
        b.fb_event = "Purchase";
        b.currency = "EUR";
        b.price = 100;
    } else {
        // unused - do not send facebook events
        return false;
    }
}
