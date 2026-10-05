// Edit wedding details here. Leave unconfirmed fields blank.
window.WEDDING_INVITATION = {
  draft: false,
  groom: 'R M Janith Chathuranga Rathnayaka',
  bride: 'W V Kaveesha Weerasinghe',
  groomShort: 'Janith',
  brideShort: 'Kaveesha',
  groomParents: { father: 'R M Jayarathna', mother: 'S M Chandrawathi' },
  brideParents: { father: '', mother: '' }, // Optional; omitted from this groom-side invitation.
  eventTitle: 'Wedding Celebration',
  date: '2026-11-21', // Saturday, 21 November 2026.
  startTime: '08:30',
  endTime: '',
  timeLabel: '8:30 AM',
  timezoneOffset: '+05:30',
  venue: {
    name: 'Gonagama Reception Hall',
    hall: '',
    address: 'Hanhamunawa',
    mapsUrl: '', // Optional exact Google Maps sharing link; otherwise use the venue search.
    mapEmbedUrl: '',
    note: ''
  },
  agenda: [], // Add confirmed programme items as {time:'', title:'', note:''}.
  closing: 'Your presence will make our celebration even more special.',
  contact: { name: 'Janith Chathuranga', phone: '+94 77 173 2894' }
};
