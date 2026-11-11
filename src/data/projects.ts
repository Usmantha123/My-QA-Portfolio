/* ─── Types ─── */
export interface SampleTestCase {
  id: string;
  title: string;
  precondition: string;
  steps: string[];
  expectedResult: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface SampleBug {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  module: string;
  stepsToReproduce: string[];
  actualResult: string;
  expectedResult: string;
  status: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  testingAreas: string[];
  tools: string[];          // TODO: Replace with tools you actually used
  caseStudy: {
    overview: string;
    objectives: string[];
    testEnvironment: string[];  // TODO: Add real test devices/OS versions
    approach: string;
    sampleTestCases: SampleTestCase[];
    identifiedBugs: SampleBug[];
    summary: string;
  };
}

/*
 * ─── Featured QA Projects ───
 *
 * NOTE: Sample test cases and bugs are illustrative templates.
 * Replace them with your real testing evidence when available.
 */

export const projects: Project[] = [
  {
    id: 'wifi-analyzer',
    title: 'WiFi Analyzer',
    category: 'Android Application Testing',
    description:
      'Comprehensive testing of a WiFi analysis application covering network scanning, device detection, speed testing, and permission handling.',
    testingAreas: [
      'WiFi Scanner',
      'Connected Devices',
      'Network Speed Test',
      'Permission Handling',
      'UI/UX Validation',
      'Crash Analysis',
    ],
    tools: ['Android Studio', 'Firebase Crashlytics', 'ClickUp'], // TODO: Verify tools
    caseStudy: {
      overview:
        'Performed end-to-end manual testing of a WiFi Analyzer Android application, focusing on core scanning features, device connectivity detection, and network speed measurement accuracy.',
      objectives: [
        'Validate WiFi scanning and network listing functionality',
        'Test connected device detection accuracy',
        'Verify speed test feature across different networks',
        'Ensure proper permission request flows',
        'Identify UI/UX issues and crashes',
      ],
      testEnvironment: [
        'Android device — [TODO: Add model]',
        'Android version — [TODO: Add version]',
        'Multiple WiFi networks for testing',
      ],
      approach:
        'Applied a combination of functional testing, exploratory testing, and negative testing. Focused on real-world usage scenarios including poor network conditions and permission denial flows.',
      sampleTestCases: [
        {
          id: 'WA-TC-001',
          title: 'Verify WiFi scanner detects nearby networks',
          precondition: 'WiFi is enabled on the device; location permission is granted.',
          steps: [
            'Open the application.',
            'Navigate to the WiFi Scanner screen.',
            'Tap the Scan button.',
            'Wait for the scan to complete.',
          ],
          expectedResult:
            'All nearby WiFi networks are listed with their signal strength, security type, and channel information.',
          priority: 'High',
        },
        {
          id: 'WA-TC-002',
          title: 'Verify app behavior when WiFi is disabled',
          precondition: 'WiFi is turned off on the device.',
          steps: [
            'Open the application.',
            'Navigate to the WiFi Scanner screen.',
            'Observe the app behavior.',
          ],
          expectedResult:
            'App displays a clear message indicating WiFi is disabled and prompts the user to enable it.',
          priority: 'High',
        },
      ],
      identifiedBugs: [
        {
          id: 'WA-BUG-001',
          title: 'Scan results not cleared when WiFi is toggled off/on',
          severity: 'Medium',
          module: 'WiFi Scanner',
          stepsToReproduce: [
            'Open WiFi Scanner and perform a scan.',
            'Turn WiFi off from device settings.',
            'Turn WiFi back on.',
            'Return to the app.',
          ],
          actualResult: 'Previous scan results remain displayed with stale data.',
          expectedResult:
            'Scan results should be cleared or a re-scan should be triggered automatically.',
          status: 'Reported',
        },
      ],
      summary:
        'Tested core WiFi scanning, device detection, and speed test features. Identified issues related to state management and edge-case permission flows. Documented findings and collaborated with the development team on fixes.',
    },
  },
  {
    id: 'screen-mirroring',
    title: 'Screen Mirroring',
    category: 'Android Application Testing',
    description:
      'Tested a screen mirroring application for casting and connectivity, covering splash screen, device pairing, and casting stability.',
    testingAreas: [
      'Splash Screen',
      'Device Connectivity',
      'Casting Features',
      'Navigation',
      'Regression Testing',
      'Release Validation',
    ],
    tools: ['Android Studio', 'Jira'], // TODO: Verify tools
    caseStudy: {
      overview:
        'Conducted thorough manual testing of a Screen Mirroring Android application, focusing on device discovery, casting reliability, and seamless navigation.',
      objectives: [
        'Validate splash screen timing and transitions',
        'Test device discovery and pairing flow',
        'Verify casting quality and stability',
        'Ensure navigation between screens is smooth',
        'Perform regression testing on release builds',
      ],
      testEnvironment: [
        'Android device — [TODO: Add model]',
        'Casting target — [TODO: Add TV/display model]',
        'Same WiFi network for both devices',
      ],
      approach:
        'Followed a structured functional testing approach combined with regression testing before each release candidate. Tested various casting scenarios including interruptions and reconnections.',
      sampleTestCases: [
        {
          id: 'SM-TC-001',
          title: 'Verify device discovery on the same network',
          precondition: 'Both source and target devices are on the same WiFi network.',
          steps: [
            'Open the Screen Mirroring app.',
            'Navigate to the device discovery screen.',
            'Wait for the scan to complete.',
          ],
          expectedResult:
            'The target device appears in the list of available devices within a reasonable time.',
          priority: 'High',
        },
      ],
      identifiedBugs: [
        {
          id: 'SM-BUG-001',
          title: 'Casting disconnects when device screen locks',
          severity: 'High',
          module: 'Casting Features',
          stepsToReproduce: [
            'Connect to a casting target.',
            'Start mirroring the screen.',
            'Allow the device screen to lock automatically.',
            'Unlock the device.',
          ],
          actualResult: 'Casting session is terminated and must be restarted manually.',
          expectedResult:
            'Casting should continue or automatically reconnect after the device is unlocked.',
          status: 'Reported',
        },
      ],
      summary:
        'Validated core mirroring and casting features. Found issues with connection stability during interruptions. Performed regression testing across multiple release builds.',
    },
  },
  {
    id: 'gps-navigation',
    title: 'GPS Navigation',
    category: 'Android Application Testing',
    description:
      'Tested a GPS navigation application covering voice navigation, location permissions, map rendering, and route calculation.',
    testingAreas: [
      'Voice Navigation',
      'Location Permissions',
      'Map Rendering',
      'Current Location Detection',
      'Route Functionality',
    ],
    tools: ['Android Studio', 'ClickUp', 'Firebase Crashlytics'], // TODO: Verify tools
    caseStudy: {
      overview:
        'Performed detailed testing of a GPS Navigation Android application, with a focus on location accuracy, permission handling, map rendering, and voice navigation features.',
      objectives: [
        'Validate location detection with different permission levels',
        'Test voice navigation accuracy and timing',
        'Verify map rendering and route display',
        'Ensure proper handling of GPS signal loss',
        'Identify crashes and performance issues',
      ],
      testEnvironment: [
        'Android device — [TODO: Add model]',
        'Android version — [TODO: Add version]',
        'Outdoor and indoor testing environments',
      ],
      approach:
        'Combined functional testing with exploratory testing in real-world environments. Tested location-related flows under various permission configurations and network conditions.',
      sampleTestCases: [
        {
          id: 'GPS-TC-001',
          title: 'Verify current location detection with precise location permission',
          precondition: 'Precise location permission is granted; GPS is enabled.',
          steps: [
            'Open the application.',
            'Navigate to the map screen.',
            'Observe the current location marker.',
          ],
          expectedResult:
            'Current location is accurately displayed on the map with a blue marker.',
          priority: 'High',
        },
      ],
      identifiedBugs: [
        {
          id: 'GPS-BUG-001',
          title: 'Current Location Not Detected with Approximate Location Permission',
          severity: 'High',
          module: 'Voice Navigation',
          stepsToReproduce: [
            'Open Voice Navigation.',
            'Select Approximate Location permission.',
            'Allow access.',
            'Observe the map.',
          ],
          actualResult: 'Map loads but current location is not displayed.',
          expectedResult:
            'Display the available approximate location or explain why precise location is needed for accurate navigation.',
          status: 'Reported',
        },
      ],
      summary:
        'Tested location detection, voice navigation, and map rendering across multiple scenarios. Identified a key issue with approximate location permission handling. Documented all findings for the development team.',
    },
  },
  {
    id: 'ai-phone-cleaner',
    title: 'AI Phone Cleaner',
    category: 'Android Application Testing',
    description:
      'Tested an AI-powered phone cleaning application, covering storage analysis, duplicate detection, cleanup operations, and UI validation.',
    testingAreas: [
      'Storage Calculation',
      'Duplicate File Detection',
      'Cleanup Results',
      'UI/UX Testing',
      'Functional Validation',
    ],
    tools: ['Android Studio', 'Jira', 'Chrome DevTools'], // TODO: Verify tools
    caseStudy: {
      overview:
        'Conducted comprehensive testing of an AI Phone Cleaner application, focusing on storage analysis accuracy, duplicate file detection, and cleanup operations.',
      objectives: [
        'Validate storage calculation accuracy',
        'Test duplicate file detection logic',
        'Verify cleanup operation results',
        'Ensure smooth UI/UX interactions',
        'Test edge cases with empty storage and large files',
      ],
      testEnvironment: [
        'Android device — [TODO: Add model]',
        'Device storage state — [TODO: Add details]',
        'Various file types for testing',
      ],
      approach:
        'Used functional testing and negative testing approaches. Tested with various storage states including near-full, near-empty, and with large numbers of duplicate files.',
      sampleTestCases: [
        {
          id: 'APC-TC-001',
          title: 'Verify storage calculation matches system storage info',
          precondition: 'App has storage permission granted.',
          steps: [
            'Open the application.',
            'Navigate to the Storage Analysis screen.',
            'Wait for analysis to complete.',
            'Compare displayed values with device Settings > Storage.',
          ],
          expectedResult:
            'Storage values shown in the app match the device system storage information (within a reasonable margin).',
          priority: 'High',
        },
      ],
      identifiedBugs: [
        {
          id: 'APC-BUG-001',
          title: 'Duplicate detection misidentifies similar but different files',
          severity: 'Medium',
          module: 'Duplicate File Detection',
          stepsToReproduce: [
            'Add two images with similar names but different content.',
            'Run duplicate file detection.',
            'Review the detected duplicates list.',
          ],
          actualResult: 'Both images are flagged as duplicates despite having different content.',
          expectedResult:
            'Only files with identical content should be flagged as duplicates.',
          status: 'Reported',
        },
      ],
      summary:
        'Tested storage analysis, duplicate detection, and cleanup features. Identified issues with duplicate detection accuracy. Validated UI/UX consistency across all screens.',
    },
  },
];

/* ─── Featured Bug Report (for the bug showcase section) ─── */
export const featuredBug: SampleBug = {
  id: 'GPS-BUG-001',
  title: 'Current Location Not Detected with Approximate Location Permission',
  severity: 'High',
  module: 'Voice Navigation',
  stepsToReproduce: [
    'Open Voice Navigation.',
    'Select Approximate Location permission.',
    'Allow access.',
    'Observe the map.',
  ],
  actualResult: 'Map loads but current location is not displayed.',
  expectedResult:
    'Display the available approximate location or explain why precise location is needed for accurate navigation.',
  status: 'Reported',
};

