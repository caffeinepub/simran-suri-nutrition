import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  public type ContactFormSubmission = {
    fullName : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module ContactFormSubmission {
    public func compare(sub1 : ContactFormSubmission, sub2 : ContactFormSubmission) : Order.Order {
      Text.compare(sub1.fullName, sub2.fullName);
    };
  };

  var nextId = 0;
  let submissions = Map.empty<Nat, ContactFormSubmission>();

  public shared ({ caller }) func submitContactForm(fullName : Text, email : Text, phone : Text, message : Text) : async () {
    let submission : ContactFormSubmission = {
      fullName;
      email;
      phone;
      message;
    };

    let currentId = nextId;
    submissions.add(currentId, submission);
    nextId += 1;
  };

  public shared ({ caller }) func getAllSubmissions() : async [ContactFormSubmission] {
    submissions.values().toArray().sort();
  };
};
