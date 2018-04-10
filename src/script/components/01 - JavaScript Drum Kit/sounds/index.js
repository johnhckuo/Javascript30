import clap from "./clap.wav"
import hihat from "./hihat.wav"
import kick from "./kick.wav"
import openhat from "./openhat.wav"
import ride from "./ride.wav"
import snare from "./snare.wav"
import tink from "./tink.wav"
import tom from "./tom.wav"
import boom from "./boom.wav"

const sound = {
  65: {
    name: "clap",
    kbd: "A",
    src: clap
  },
  83: {
    name: "hihat",
    kbd: "S",
    src: hihat
  },
  68: {
    name: "kick",
    kbd: "D",
    src: kick
  },
  70: {
    name: "openhat",
    kbd: "F",
    src: openhat
  },
  71: {
    name: "boom",
    kbd: "G",
    src: boom
  },
  72: {
    name: "ride",
    kbd: "H",
    src: ride
  },
  74: {
    name: "snare",
    kbd: "J",
    src: snare
  },
  75: {
    name: "tink",
    kbd: "K",
    src: tink
  },
  76: {
    name: "tom",
    kbd: "L",
    src: tom
  }
}

export default sound;