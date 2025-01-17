export interface CharacteristicObject {
    serviceUuid?: string; // added for convenience
    aid?: number; // added for convenience
    iid?: number;
    type?: string;
    value?: unknown;
    perms?: string[];
    ev?: boolean;
    description?: string;
    format?: string;
    unit?: string;
    minValue?: number;
    maxValue?: number;
    minStep?: number;
    maxLen?: number;
    maxDataLen?: number;
    'valid-values'?: number[];
    'valid-values-range'?: number[];
    TTL?: number;
    pid?: number;
}

const UuidSuffix = '-0000-1000-8000-0026BB765291';

/* eslint-disable max-len */
const CharacteristicMapByUuid = {
    [`00000001${UuidSuffix}`]: 'public.hap.characteristic.administrator-only-access',
    [`00000005${UuidSuffix}`]: 'public.hap.characteristic.audio-feedback',
    [`00000008${UuidSuffix}`]: 'public.hap.characteristic.brightness',
    [`0000000D${UuidSuffix}`]: 'public.hap.characteristic.temperature.cooling-threshold',
    [`0000000E${UuidSuffix}`]: 'public.hap.characteristic.door-state.current',
    [`0000000F${UuidSuffix}`]: 'public.hap.characteristic.heating-cooling.current',
    [`00000010${UuidSuffix}`]: 'public.hap.characteristic.relative-humidity.current',
    [`00000011${UuidSuffix}`]: 'public.hap.characteristic.temperature.current',
    [`00000012${UuidSuffix}`]: 'public.hap.characteristic.temperature.heating-threshold',
    [`00000013${UuidSuffix}`]: 'public.hap.characteristic.hue',
    [`00000014${UuidSuffix}`]: 'public.hap.characteristic.identify',
    [`00000019${UuidSuffix}`]: 'public.hap.characteristic.lock-management.control-point',
    [`0000001A${UuidSuffix}`]: 'public.hap.characteristic.lock-management.auto-secure-timeout',
    [`0000001C${UuidSuffix}`]: 'public.hap.characteristic.lock-mechanism.last-known-action',
    [`0000001D${UuidSuffix}`]: 'public.hap.characteristic.lock-mechanism.current-state',
    [`0000001E${UuidSuffix}`]: 'public.hap.characteristic.lock-mechanism.target-state',
    [`0000001F${UuidSuffix}`]: 'public.hap.characteristic.logs',
    [`00000020${UuidSuffix}`]: 'public.hap.characteristic.manufacturer',
    [`00000021${UuidSuffix}`]: 'public.hap.characteristic.model',
    [`00000022${UuidSuffix}`]: 'public.hap.characteristic.motion-detected',
    [`00000023${UuidSuffix}`]: 'public.hap.characteristic.name',
    [`00000024${UuidSuffix}`]: 'public.hap.characteristic.obstruction-detected',
    [`00000025${UuidSuffix}`]: 'public.hap.characteristic.on',
    [`00000026${UuidSuffix}`]: 'public.hap.characteristic.outlet-in-use',
    [`00000028${UuidSuffix}`]: 'public.hap.characteristic.rotation.direction',
    [`00000029${UuidSuffix}`]: 'public.hap.characteristic.rotation.speed',
    [`0000002F${UuidSuffix}`]: 'public.hap.characteristic.saturation',
    [`00000030${UuidSuffix}`]: 'public.hap.characteristic.serial-number',
    [`00000032${UuidSuffix}`]: 'public.hap.characteristic.door-state.target',
    [`00000033${UuidSuffix}`]: 'public.hap.characteristic.heating-cooling.target',
    [`00000034${UuidSuffix}`]: 'public.hap.characteristic.relative-humidity.target',
    [`00000035${UuidSuffix}`]: 'public.hap.characteristic.temperature.target',
    [`00000036${UuidSuffix}`]: 'public.hap.characteristic.temperature.units',
    [`00000037${UuidSuffix}`]: 'public.hap.characteristic.version',
    [`0000004C${UuidSuffix}`]: 'public.hap.characteristic.pairing.pair-setup',
    [`0000004E${UuidSuffix}`]: 'public.hap.characteristic.pairing.pair-verify',
    [`0000004F${UuidSuffix}`]: 'public.hap.characteristic.pairing.features',
    [`00000050${UuidSuffix}`]: 'public.hap.characteristic.pairing.pairings',
    [`00000052${UuidSuffix}`]: 'public.hap.characteristic.firmware.revision',
    [`00000053${UuidSuffix}`]: 'public.hap.characteristic.hardware.revision',
    [`00000054${UuidSuffix}`]: 'public.hap.characteristic.software.revision',
    [`00000057${UuidSuffix}`]: 'public.hap.characteristic.accessory-identifier',
    [`00000058${UuidSuffix}`]: 'public.hap.characteristic.tunneled-accessory-state-number',
    [`00000059${UuidSuffix}`]: 'public.hap.characteristic.tunneled-accessory-connected',
    [`0000005B${UuidSuffix}`]: 'public.hap.characteristic.relay-enabled',
    [`0000005C${UuidSuffix}`]: 'public.hap.characteristic.relay-state',
    [`0000005E${UuidSuffix}`]: 'public.hap.characteristic.relay-control-point',
    [`00000060${UuidSuffix}`]: 'public.hap.characteristic.tunneled-accessory-advertising',
    [`00000061${UuidSuffix}`]: 'public.hap.characteristic.tunnel-connection-timeout',
    [`00000063${UuidSuffix}`]: 'public.hap.characteristic.reachable', // REMOVED
    [`00000064${UuidSuffix}`]: 'public.hap.characteristic.air-particulate.density', // since iOS 9
    [`00000065${UuidSuffix}`]: 'public.hap.characteristic.air-particulate.size', // since iOS 9
    [`00000066${UuidSuffix}`]: 'public.hap.characteristic.security-system-state.current', // since iOS 9
    [`00000067${UuidSuffix}`]: 'public.hap.characteristic.security-system-state.target', // since iOS 9
    [`00000068${UuidSuffix}`]: 'public.hap.characteristic.battery-level', // since iOS 9
    [`00000069${UuidSuffix}`]: 'public.hap.characteristic.carbon-monoxide.detected', // since iOS 9
    [`0000006A${UuidSuffix}`]: 'public.hap.characteristic.contact-state', // since iOS 9
    [`0000006B${UuidSuffix}`]: 'public.hap.characteristic.light-level.current', // since iOS 9
    [`0000006C${UuidSuffix}`]: 'public.hap.characteristic.horizontal-tilt.current', // since iOS 9
    [`0000006D${UuidSuffix}`]: 'public.hap.characteristic.position.current', // since iOS 9
    [`0000006E${UuidSuffix}`]: 'public.hap.characteristic.vertical-tilt.current', // since iOS 9
    [`0000006F${UuidSuffix}`]: 'public.hap.characteristic.position.hold', // since iOS 9
    [`00000070${UuidSuffix}`]: 'public.hap.characteristic.leak-detected', // since iOS 9
    [`00000071${UuidSuffix}`]: 'public.hap.characteristic.occupancy-detected', // since iOS 9
    [`00000072${UuidSuffix}`]: 'public.hap.characteristic.position.state', // since iOS 9
    [`00000073${UuidSuffix}`]: 'public.hap.characteristic.input-event', // since iOS 10.3
    [`00000074${UuidSuffix}`]: 'public.hap.characteristic.programmable-switch-output-state',
    [`00000075${UuidSuffix}`]: 'public.hap.characteristic.status-active', // since iOS 9
    [`00000076${UuidSuffix}`]: 'public.hap.characteristic.smoke-detected', // since iOS 9
    [`00000077${UuidSuffix}`]: 'public.hap.characteristic.status-fault', // since iOS 9
    [`00000078${UuidSuffix}`]: 'public.hap.characteristic.status-jammed', // since iOS 9
    [`00000079${UuidSuffix}`]: 'public.hap.characteristic.status-lo-batt', // since iOS 9
    [`0000007A${UuidSuffix}`]: 'public.hap.characteristic.status-tampered', // since iOS 9
    [`0000007B${UuidSuffix}`]: 'public.hap.characteristic.horizontal-tilt.target', // since iOS 9
    [`0000007C${UuidSuffix}`]: 'public.hap.characteristic.position.target', // since iOS 9
    [`0000007D${UuidSuffix}`]: 'public.hap.characteristic.vertical-tilt.target', // since iOS 9
    [`0000008E${UuidSuffix}`]: 'public.hap.characteristic.security-system.alarm-type', // since iOS 9
    [`0000008F${UuidSuffix}`]: 'public.hap.characteristic.charging-state', // since iOS 9
    [`00000090${UuidSuffix}`]: 'public.hap.characteristic.carbon-monoxide.level', // since iOS 9
    [`00000091${UuidSuffix}`]: 'public.hap.characteristic.carbon-monoxide.peak-level', // since iOS 9
    [`00000092${UuidSuffix}`]: 'public.hap.characteristic.carbon-dioxide.detected', // since iOS 9
    [`00000093${UuidSuffix}`]: 'public.hap.characteristic.carbon-dioxide.level', // since iOS 9
    [`00000094${UuidSuffix}`]: 'public.hap.characteristic.carbon-dioxide.peak-level', // since iOS 9
    [`00000095${UuidSuffix}`]: 'public.hap.characteristic.air-quality', // since iOS 9
    [`00000098${UuidSuffix}`]: 'public.hap.characteristic.day-of-the-week', // REMOVED
    [`0000009A${UuidSuffix}`]: 'public.hap.characteristic.time-update', // REMOVED
    [`0000009B${UuidSuffix}`]: 'public.hap.characteristic.current-time', // REMOVED
    [`0000009C${UuidSuffix}`]: 'public.hap.characteristic.link-quality', // REMOVED
    [`0000009D${UuidSuffix}`]: 'public.hap.characteristic.configure-bridged-accessory-status', // REMOVED
    [`0000009E${UuidSuffix}`]: 'public.hap.characteristic.discover-bridged-accessories', // REMOVED
    [`0000009F${UuidSuffix}`]: 'public.hap.characteristic.discovered-bridged-accessories', // REMOVED
    [`000000A0${UuidSuffix}`]: 'public.hap.characteristic.configure-bridged-accessory',
    [`000000A3${UuidSuffix}`]: 'public.hap.characteristic.category', // REMOVED
    [`000000A4${UuidSuffix}`]: 'public.hap.characteristic.app-matching-identifier',
    [`000000A6${UuidSuffix}`]: 'public.hap.characteristic.accessory-properties',
    [`000000A7${UuidSuffix}`]: 'public.hap.characteristic.lock-physical-controls', // since iOS 10.3
    [`000000A8${UuidSuffix}`]: 'public.hap.characteristic.air-purifier.state.target', // since iOS 10.3
    [`000000A9${UuidSuffix}`]: 'public.hap.characteristic.air-purifier.state.current', // since iOS 10.3
    [`000000AA${UuidSuffix}`]: 'public.hap.characteristic.slat.state.current', // since iOS 10.3
    [`000000AB${UuidSuffix}`]: 'public.hap.characteristic.filter.life-level', // since iOS 10.3
    [`000000AC${UuidSuffix}`]: 'public.hap.characteristic.filter.change-indication', // since iOS 10.3
    [`000000AD${UuidSuffix}`]: 'public.hap.characteristic.filter.reset-indication', // since iOS 10.3
    [`000000AE${UuidSuffix}`]: 'public.hap.characteristic.air-quality.target', // REMOVED
    [`000000AF${UuidSuffix}`]: 'public.hap.characteristic.fan.state.current', // since iOS 10.3
    [`000000B0${UuidSuffix}`]: 'public.hap.characteristic.active', // since iOS 10.3
    [`000000B1${UuidSuffix}`]: 'public.hap.characteristic.heater-cooler.state.current', // since iOS 11
    [`000000B2${UuidSuffix}`]: 'public.hap.characteristic.heater-cooler.state.target', // since iOS 11
    [`000000B3${UuidSuffix}`]: 'public.hap.characteristic.humidifier-dehumidifier.state.current', // since iOS 11
    [`000000B4${UuidSuffix}`]: 'public.hap.characteristic.humidifier-dehumidifier.state.target', // since iOS 11
    [`000000B5${UuidSuffix}`]: 'public.hap.characteristic.water-level', // since iOS 11
    [`000000B6${UuidSuffix}`]: 'public.hap.characteristic.swing-mode', // since iOS 10.3
    [`000000BE${UuidSuffix}`]: 'public.hap.characteristic.slat.state.target', // REMOVED
    [`000000BF${UuidSuffix}`]: 'public.hap.characteristic.fan.state.target', // since iOS 10.3
    [`000000C0${UuidSuffix}`]: 'public.hap.characteristic.type.slat', // since iOS 10.3
    [`000000C1${UuidSuffix}`]: 'public.hap.characteristic.tilt.current', // since iOS 10.3
    [`000000C2${UuidSuffix}`]: 'public.hap.characteristic.tilt.target', // since iOS 10.3
    [`000000C3${UuidSuffix}`]: 'public.hap.characteristic.density.ozone', // since iOS 10.3
    [`000000C4${UuidSuffix}`]: 'public.hap.characteristic.density.no2', // since iOS 10.3
    [`000000C5${UuidSuffix}`]: 'public.hap.characteristic.density.so2', // since iOS 10.3
    [`000000C6${UuidSuffix}`]: 'public.hap.characteristic.density.pm25', // since iOS 10.3
    [`000000C7${UuidSuffix}`]: 'public.hap.characteristic.density.pm10', // since iOS 10.3
    [`000000C8${UuidSuffix}`]: 'public.hap.characteristic.density.voc', // since iOS 10.3
    [`000000C9${UuidSuffix}`]: 'public.hap.characteristic.relative-humidity.dehumidifier-threshold', // since iOS 11
    [`000000CA${UuidSuffix}`]: 'public.hap.characteristic.relative-humidity.humidifier-threshold', // since iOS 11
    [`000000CB${UuidSuffix}`]: 'public.hap.characteristic.service-label-index', // since iOS 10.3
    [`000000CD${UuidSuffix}`]: 'public.hap.characteristic.service-label-namespace', // since iOS 10.3
    [`000000CE${UuidSuffix}`]: 'public.hap.characteristic.color-temperature', // since iOS 10.3
    [`000000D1${UuidSuffix}`]: 'public.hap.characteristic.program-mode', // since iOS 11.2
    [`000000D2${UuidSuffix}`]: 'public.hap.characteristic.in-use', // since iOS 11.2
    [`000000D3${UuidSuffix}`]: 'public.hap.characteristic.set-duration', // since iOS 11.2
    [`000000D4${UuidSuffix}`]: 'public.hap.characteristic.remaining-duration', // since iOS 11.2
    [`000000D5${UuidSuffix}`]: 'public.hap.characteristic.valve-type', // since iOS 11.2
    [`000000D6${UuidSuffix}`]: 'public.hap.characteristic.is-configured', // since iOS 12
    [`000000DB${UuidSuffix}`]: 'public.hap.characteristic.input-source-type',
    [`000000DC${UuidSuffix}`]: 'public.hap.characteristic.input-device-type',
    [`000000DD${UuidSuffix}`]: 'public.hap.characteristic.closed-captions', // REMOVED
    [`000000DF${UuidSuffix}`]: 'public.hap.characteristic.power-mode-selection',
    [`000000E0${UuidSuffix}`]: 'public.hap.characteristic.current-media-state',
    [`000000E1${UuidSuffix}`]: 'public.hap.characteristic.remote-key',
    [`000000E2${UuidSuffix}`]: 'public.hap.characteristic.picture-mode',
    [`000000E3${UuidSuffix}`]: 'public.hap.characteristic.configured-name',
    [`000000E4${UuidSuffix}`]: 'public.hap.characteristic.password-setting',
    [`000000E5${UuidSuffix}`]: 'public.hap.characteristic.access-control-level',
    [`000000E6${UuidSuffix}`]: 'public.hap.characteristic.identifier',
    [`000000E7${UuidSuffix}`]: 'public.hap.characteristic.active-identifier', // since iOS 12
    [`000000E8${UuidSuffix}`]: 'public.hap.characteristic.sleep-discovery-mode',
    [`000000E9${UuidSuffix}`]: 'public.hap.characteristic.volume-control-type',
    [`000000EA${UuidSuffix}`]: 'public.hap.characteristic.volume-selector',
    [`00000114${UuidSuffix}`]: 'public.hap.characteristic.supported-video-stream-configuration', // since iOS 10
    [`00000115${UuidSuffix}`]: 'public.hap.characteristic.supported-audio-configuration', // since iOS 10
    [`00000116${UuidSuffix}`]: 'public.hap.characteristic.supported-rtp-configuration', // since iOS 10
    [`00000117${UuidSuffix}`]: 'public.hap.characteristic.selected-rtp-stream-configuration', // since iOS 10
    [`00000118${UuidSuffix}`]: 'public.hap.characteristic.setup-endpoints', // since iOS 10
    [`00000119${UuidSuffix}`]: 'public.hap.characteristic.volume', // since iOS 10
    [`0000011A${UuidSuffix}`]: 'public.hap.characteristic.mute', // since iOS 10
    [`0000011B${UuidSuffix}`]: 'public.hap.characteristic.night-vision', // since iOS 10
    [`0000011C${UuidSuffix}`]: 'public.hap.characteristic.zoom-optical', // since iOS 10
    [`0000011D${UuidSuffix}`]: 'public.hap.characteristic.zoom-digital', // since iOS 10
    [`0000011E${UuidSuffix}`]: 'public.hap.characteristic.image-rotation', // since iOS 10
    [`0000011F${UuidSuffix}`]: 'public.hap.characteristic.image-mirror', // since iOS 10 - image-mirroring??
    [`00000120${UuidSuffix}`]: 'public.hap.characteristic.streaming-status', // since iOS 10
    [`00000123${UuidSuffix}`]: 'public.hap.characteristic.supported-target-configuration', // since iOS 12
    [`00000124${UuidSuffix}`]: 'public.hap.characteristic.target-list', // since iOS 12
    [`00000126${UuidSuffix}`]: 'public.hap.characteristic.button-event', // since iOS 12
    [`00000128${UuidSuffix}`]: 'public.hap.characteristic.selected-audio-stream-configuration', // since iOS 12
    [`00000130${UuidSuffix}`]: 'public.hap.characteristic.supported-data-stream-transport-configuration', // since iOS 12
    [`00000131${UuidSuffix}`]: 'public.hap.characteristic.setup-data-stream-transport', // since iOS 12
    [`00000132${UuidSuffix}`]: 'public.hap.characteristic.siri.input-type', // since iOS 12
    [`00000134${UuidSuffix}`]: 'public.hap.characteristic.target-visibility-state',
    [`00000135${UuidSuffix}`]: 'public.hap.characteristic.current-visibility-state',
    [`00000136${UuidSuffix}`]: 'public.hap.characteristic.display-order',
    [`00000137${UuidSuffix}`]: 'public.hap.characteristic.target-media-state',
    [`00000138${UuidSuffix}`]: 'public.hap.characteristic.data-stream.hap-transport', // since iOS 14
    [`00000139${UuidSuffix}`]: 'public.hap.characteristic.data-stream.hap-transport-interrupt', // since iOS 14
    [`00000143${UuidSuffix}`]: 'public.hap.characteristic.characteristic-value-transition-control', // since iOS 14
    [`00000144${UuidSuffix}`]: 'public.hap.characteristic.supported-characteristic-value-transition-configuration', // since iOS 14
    [`00000201${UuidSuffix}`]: 'public.hap.characteristic.setup-transfer-transport', // since iOS 13.4
    [`00000202${UuidSuffix}`]: 'public.hap.characteristic.supported-transfer-transport-configuration', // since iOS 13.4
    [`00000205${UuidSuffix}`]: 'public.hap.characteristic.supported-camera-recording-configuration',
    [`00000206${UuidSuffix}`]: 'public.hap.characteristic.supported-video-recording-configuration',
    [`00000207${UuidSuffix}`]: 'public.hap.characteristic.supported-audio-recording-configuration',
    [`00000209${UuidSuffix}`]: 'public.hap.characteristic.selected-camera-recording-configuration',
    [`0000020C${UuidSuffix}`]: 'public.hap.characteristic.network-client-control', // network-client-profile-control??
    [`0000020D${UuidSuffix}`]: 'public.hap.characteristic.network-client-status-control',
    [`0000020E${UuidSuffix}`]: 'public.hap.characteristic.router-status',
    [`00000210${UuidSuffix}`]: 'public.hap.characteristic.supported-router-configuration',
    [`00000211${UuidSuffix}`]: 'public.hap.characteristic.wan-configuration-list',
    [`00000212${UuidSuffix}`]: 'public.hap.characteristic.wan-status-list',
    [`00000215${UuidSuffix}`]: 'public.hap.characteristic.managed-network-enable',
    [`0000021B${UuidSuffix}`]: 'public.hap.characteristic.homekit-camera-active',
    [`0000021C${UuidSuffix}`]: 'public.hap.characteristic.third-party-camera-active',
    [`0000021D${UuidSuffix}`]: 'public.hap.characteristic.camera-operating-mode-indicator',
    [`0000021E${UuidSuffix}`]: 'public.hap.characteristic.wifi-satellite-status',
    [`0000021F${UuidSuffix}`]: 'public.hap.characteristic.network-access-violation-control',
    [`00000220${UuidSuffix}`]: 'public.hap.characteristic.product-data',
    [`00000222${UuidSuffix}`]: 'public.hap.characteristic.wake-configuration', // since iOS 13.2
    [`00000223${UuidSuffix}`]: 'public.hap.characteristic.event-snapshots-active',
    [`00000224${UuidSuffix}`]: 'public.hap.characteristic.diagonal-field-of-view', // since iOS 13.2
    [`00000225${UuidSuffix}`]: 'public.hap.characteristic.periodic-snapshots-active',
    [`00000226${UuidSuffix}`]: 'public.hap.characteristic.recording-audio-active',
    [`00000227${UuidSuffix}`]: 'public.hap.characteristic.manually-disabled',
    [`00000229${UuidSuffix}`]: 'public.hap.characteristic.video-analysis-active', // since iOS 14
    [`0000022B${UuidSuffix}`]: 'public.hap.characteristic.current-transport', // since iOS 14
    [`0000022C${UuidSuffix}`]: 'public.hap.characteristic.wifi-capabilities', // since iOS 14
    [`0000022D${UuidSuffix}`]: 'public.hap.characteristic.wifi-configuration-control', // since iOS 14
    [`00000232${UuidSuffix}`]: 'public.hap.characteristic.operating-state-response', // since iOS 14
    [`00000233${UuidSuffix}`]: 'public.hap.characteristic.supported-firmware-update-configuration',
    [`00000234${UuidSuffix}`]: 'public.hap.characteristic.firmware-update-readiness',
    [`00000235${UuidSuffix}`]: 'public.hap.characteristic.firmware-update-status',
    [`00000238${UuidSuffix}`]: 'public.hap.characteristic.supported-diagnostics-snapshot', // since iOS 14
    [`0000023A${UuidSuffix}`]: 'public.hap.characteristic.sleep-interval', // since iOS 14
    [`0000023B${UuidSuffix}`]: 'public.hap.characteristic.activity-interval', // since iOS 14
    [`0000023C${UuidSuffix}`]: 'public.hap.characteristic.ping', // since iOS 14
    [`0000023D${UuidSuffix}`]: 'public.hap.characteristic.event-retransmission-maximum', // since iOS 14
    [`0000023E${UuidSuffix}`]: 'public.hap.characteristic.event-transmission-counters', // since iOS 14
    [`0000023F${UuidSuffix}`]: 'public.hap.characteristic.received-signal-strength-indication', // since iOS 14
    [`00000241${UuidSuffix}`]: 'public.hap.characteristic.signal-to-noise-ratio', // since iOS 14
    [`00000242${UuidSuffix}`]: 'public.hap.characteristic.transmit-power', // since iOS 14
    [`00000243${UuidSuffix}`]: 'public.hap.characteristic.maximum-transmit-power', // since iOS 14
    [`00000244${UuidSuffix}`]: 'public.hap.characteristic.receiver-sensitivity', // since iOS 14
    [`00000245${UuidSuffix}`]: 'public.hap.characteristic.cca-signal-detect-threshold', // since iOS 14
    [`00000246${UuidSuffix}`]: 'public.hap.characteristic.cca-energy-detect-threshold', // since iOS 14
    [`00000247${UuidSuffix}`]: 'public.hap.characteristic.mac.retransmission-maximum', // since iOS 14
    [`00000248${UuidSuffix}`]: 'public.hap.characteristic.mac.transmission-counters',
    [`00000249${UuidSuffix}`]: 'public.hap.characteristic.staged-firmware-version',
    [`0000024A${UuidSuffix}`]: 'public.hap.characteristic.heart-beat', // since iOS 14,
    [`0000024B${UuidSuffix}`]: 'public.hap.characteristic.characteristic-value-active-transition-count', // since iOS 14
    [`0000024C${UuidSuffix}`]: 'public.hap.characteristic.supported-diagnostics-modes',
    [`00000246${UuidSuffix}`]: 'public.hap.characteristic.cca-energy-detect-threshold',
    [`0000024A${UuidSuffix}`]: 'public.hap.characteristic.heart-beat',
    [`0000024D${UuidSuffix}`]: 'public.hap.characteristic.selected-diagnostics-modes',
    [`00000254${UuidSuffix}`]: 'public.hap.characteristic.siri.endpoint-session-status',
    [`00000255${UuidSuffix}`]: 'public.hap.characteristic.siri.enable',
    [`00000256${UuidSuffix}`]: 'public.hap.characteristic.siri.listening',
    [`00000257${UuidSuffix}`]: 'public.hap.characteristic.siri.touch-to-use',
    [`00000258${UuidSuffix}`]: 'public.hap.characteristic.siri.light-on-use',
    [`0000025A${UuidSuffix}`]: 'public.hap.characteristic.siri.engine-version',
    [`0000025B${UuidSuffix}`]: 'public.hap.characteristic.air-play.enable',
    [`00000261${UuidSuffix}`]: 'public.hap.characteristic.access-code.supported-configuration', // since iOS 15
    [`00000262${UuidSuffix}`]: 'public.hap.characteristic.access-code.control-point', // since iOS 15
    [`00000263${UuidSuffix}`]: 'public.hap.characteristic.configuration-state', // since iOS 15
    [`00000264${UuidSuffix}`]: 'public.hap.characteristic.nfc-access-control-point', // since iOS 15
    [`00000265${UuidSuffix}`]: 'public.hap.characteristic.nfc-access-supported-configuration', // since iOS 15
    [`00000268${UuidSuffix}`]: 'public.hap.characteristic.supported-asset-types',
    [`00000269${UuidSuffix}`]: 'public.hap.characteristic.asset-update-readiness',
    [`0000026B${UuidSuffix}`]: 'public.hap.characteristic.multifunction-button',
    [`0000026C${UuidSuffix}`]: 'public.hap.characteristic.hardware.finish', // since iOS 15
    [`00000702${UuidSuffix}`]: 'public.hap.characteristic.thread.node-capabilities',
    [`00000703${UuidSuffix}`]: 'public.hap.characteristic.thread.status',
    [`00000704${UuidSuffix}`]: 'public.hap.characteristic.thread.control-point',
    [`00000706${UuidSuffix}`]: 'public.hap.characteristic.thread.open-thread-version',
};
/* eslint-enable max-len */

const CharacteristicMapByCharacteristic = Object.assign(
    {},
    ...Object.entries(CharacteristicMapByUuid).map(([a, b]) => ({ [b]: a }))
);

/**
 * Ensure the type is a valid characteristic UUID, also when short representations is used
 *
 * @param {string} uuid - Characteristic UUID
 * @returns {string} Characteristic UUID as UUID
 */
export function ensureCharacteristicUuid(uuid: string): string {
    if (uuid.length <= 8) {
        uuid = `${uuid.padStart(8, '0')}${UuidSuffix}`;
    }

    uuid = uuid.toUpperCase();

    return uuid;
}

/**
 * Get a characteristic name from its UUID.
 *
 * @param {string} uuid - Characteristic UUID
 * @returns {string} Characteristic name
 */
export function characteristicFromUuid(uuid: string): string {
    uuid = ensureCharacteristicUuid(uuid);

    return CharacteristicMapByUuid[uuid] || uuid;
}

/**
 * Get a characteristic UUID from its name.
 *
 * @param {string} characteristic - Characteristic name
 * @returns {string} Characteristic UUID
 */
export function uuidFromCharacteristic(characteristic: string): string {
    return CharacteristicMapByCharacteristic[characteristic] || characteristic;
}
