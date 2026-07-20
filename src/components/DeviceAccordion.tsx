"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Monitor, AppWindow } from "lucide-react";

interface Guide {
  title: string;
  desc?: string;
  steps: { name: string; detail: string; }[];
}

export default function DeviceAccordion() {
  const [activeTab, setActiveTab] = useState<"device" | "app">("device");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const deviceGuides: Guide[] = [
    {
      title: "How to Set Up IPTV on Firestick",
      desc: "Getting your IPTV setup on Firestick done takes under 5 minutes and works on every Amazon Firestick and Fire TV model.",
      steps: [
        { name: "STEP 1: Turn On Unknown Sources", detail: "Open Settings on your Firestick. Go to My Fire TV, then Developer Options, and switch on Apps from Unknown Sources." },
        { name: "STEP 2: Install the Downloader App", detail: "Go to the Firestick home screen, open the search bar, type Downloader, and install the free official app." },
        { name: "STEP 3: Allow Downloader Permissions", detail: "Go back to Developer Options, find Downloader in the list, and turn its unknown sources permission on." },
        { name: "STEP 4: Enter the Download Code", detail: "Open Downloader, tap the URL bar and enter the IPTV downloader code 686147 to fetch your IPTV player APK file." },
        { name: "STEP 5: Install Your IPTV Player", detail: "Once the APK downloads, tap Install and wait a few seconds for your chosen IPTV player to finish setting up." },
        { name: "STEP 6: Choose Your Login Method", detail: "Open the app, tap Add New User, and select Xtream Codes IPTV as your login method for the best experience." },
        { name: "STEP 7: Enter Your IPTV Login Details", detail: "Type your username, password, and server URL exactly as received. Make sure there are no extra spaces anywhere in the fields." },
        { name: "STEP 8: Start Streaming", detail: "Choose any channel group or VOD library and tap any title to start watching in HD, UHD or 4K instantly." }
      ]
    },
    {
      title: "How to Set Up IPTV on Smart TV",
      desc: "IPTV setup for Smart TV is simple and works on Samsung, LG, Sony, Hisense, Philips and TCL televisions.",
      steps: [
        { name: "STEP 1: Open Your TV App Store", detail: "Press Home on your remote and open the App Store, Content Store or Google Play Store depending on your TV brand." },
        { name: "STEP 2: Choose the Right App", detail: "Samsung: IPTV Smarters Pro, Ibo TV Player. LG: Hot IPTV, Bob Player. Android TV: TiviMate, GSE Smart IPTV." },
        { name: "STEP 3: Install and Open the App", detail: "Select your preferred IPTV player from the results, tap Install, and open it from your TV home screen once done." },
        { name: "STEP 4: Select Xtream Codes Login", detail: "Inside the app, tap Add Playlist or Login and select Xtream Codes IPTV as your connection method." },
        { name: "STEP 5: Enter Credentials", detail: "Type in your username, password, and server URL exactly as sent to you. If your app asks for an M3U URL instead, we provide that too." },
        { name: "STEP 6: Load and Start Watching", detail: "Your full channel list loads automatically. Browse and pick anything to start streaming in HD, UHD or 4K on your big screen." }
      ]
    },
    {
      title: "How to Install IPTV on Android TV and Android Box",
      desc: "IPTV for Android TV and Android Box is one of the easiest setups available and works on Nvidia Shield, Xiaomi Mi Box, H96 Max and all Android TV boxes.",
      steps: [
        { name: "STEP 1: Open Google Play Store", detail: "Press Home on your remote and open the Google Play Store on your Android TV or Android Box." },
        { name: "STEP 2: Search for Your IPTV Player", detail: "Search for fully compatible Android IPTV apps like TiviMate IPTV Player, IPTV Smarters Pro, or GSE Smart IPTV." },
        { name: "STEP 3: Install and Open the App", detail: "Tap Install on your chosen IPTV player, wait for it to finish, and tap Open to launch it." },
        { name: "STEP 4: Select Xtream Codes IPTV", detail: "Tap Add Playlist or Add New User and choose Xtream Codes IPTV as your connection method." },
        { name: "STEP 5: Enter Your IPTV Login", detail: "Fill in your username, password, and server URL exactly as we sent them. Double-check for any extra spaces before connecting." },
        { name: "STEP 6: Start Watching", detail: "Your channel list, VOD library, and IPTV EPG guide load in around 30 seconds. Pick any title and start streaming." }
      ]
    },
    {
      title: "How to Set Up IPTV on iPhone and iPad",
      desc: "IPTV setup on iPhone and iPad is done through player apps on the Apple App Store. Works on all iOS devices running iOS 14 and above with no jailbreak needed.",
      steps: [
        { name: "STEP 1: Open the App Store", detail: "Tap the App Store icon on your iPhone or iPad and go to the Search tab at the bottom." },
        { name: "STEP 2: Install Your IPTV App", detail: "Search for compatible iOS IPTV apps like iPlayTV AIO, Ibo Player Pro, or GSE Smart IPTV and tap Get to install." },
        { name: "STEP 3: Add Your IPTV Playlist", detail: "Open the app, tap Add Playlist or Add Source, and choose Xtream Codes IPTV for the fastest connection." },
        { name: "STEP 4: Enter Login Credentials", detail: "Type your server URL, username, and password exactly as received. No extra spaces allowed." },
        { name: "STEP 5: Load Your Channels", detail: "Tap Connect and give the app 20 to 30 seconds to pull in your full channel list, VOD library, and EPG." },
        { name: "STEP 6: Start Watching", detail: "Your full IPTV library is ready. Stream in HD or 4K from anywhere in the world." }
      ]
    },
    {
      title: "How to Install IPTV on Windows and Mac",
      desc: "IPTV setup on Windows and Mac takes just a few minutes using a dedicated desktop IPTV player app.",
      steps: [
        { name: "STEP 1: Open App Store", detail: "Windows: Open Microsoft Store. Mac: Open the App Store from your dock." },
        { name: "STEP 2: Install Your IPTV Player", detail: "Windows: Install Ibo Player or IPTV Expert. Mac: Install IPTV Smarters Pro or GSE Smart IPTV." },
        { name: "STEP 3: Select Xtream Codes Login", detail: "Open the app, tap Add Playlist or Login, and select Xtream Codes IPTV as your connection method." },
        { name: "STEP 4: Enter Login Details", detail: "Paste your server URL, username, and password directly from your WhatsApp or email to avoid any typing errors." },
        { name: "STEP 5: Start Streaming", detail: "Your full channel list loads automatically. Browse and start watching on your PC or laptop." }
      ]
    },
    {
      title: "How to Set Up IPTV on Android Smartphones and Tablets",
      desc: "IPTV setup on Android phones and tablets is one of the fastest setups available. Works on Samsung Galaxy, OnePlus, Xiaomi, Huawei, Oppo, and all Android tablets.",
      steps: [
        { name: "STEP 1: Open Google Play Store", detail: "Tap the Play Store icon on your Android phone or tablet and go to the search bar." },
        { name: "STEP 2: Install Your IPTV App", detail: "Search for and install IPTV Smarters Pro, TiviMate, or GSE Smart IPTV." },
        { name: "STEP 3: Select Xtream Codes IPTV", detail: "Open the app, tap Add New User and choose Xtream Codes IPTV for the best experience." },
        { name: "STEP 4: Enter Your IPTV Login", detail: "Fill in your server URL, username, and password exactly as sent. Copy and paste from WhatsApp." },
        { name: "STEP 5: Load Your Channels", detail: "Give the app 20 to 30 seconds to pull in your full channel list automatically." }
      ]
    },
    {
      title: "How to Set Up IPTV on Roku",
      desc: "IPTV for Roku works through screen mirroring or a private channel since Roku has a closed app store.",
      steps: [
        { name: "STEP 1: Enable Screen Mirroring", detail: "Press Home on your Roku remote, go to Settings > System, and set Screen Mirroring to Always Allow." },
        { name: "STEP 2: Install App on Phone/PC", detail: "Install IPTV Smarters Pro on your Android phone, or Ibo Player on your Windows PC." },
        { name: "STEP 3: Mirror Your Screen", detail: "Phone: Swipe down and tap Cast/Smart View. PC: Click Connect to a Wireless Display. Select your Roku." },
        { name: "STEP 4: Open App and Watch", detail: "Open your IPTV player on your device, and everything mirrors to your Roku TV screen in real time." }
      ]
    }
  ];

  const appGuides: Guide[] = [
    {
      title: "GSE Smart IPTV",
      steps: [
        { name: "STEP 1", detail: "Open GSE Smart IPTV on your device." },
        { name: "STEP 2", detail: "Tap the menu icon and select Xtream Codes or M3U Playlist." },
        { name: "STEP 3", detail: "Enter your IPTV login credentials exactly as received." },
        { name: "STEP 4", detail: "Tap Add and wait for your full channel list to load." },
        { name: "STEP 5", detail: "Browse your channels and start streaming instantly." }
      ]
    },
    {
      title: "My IPTV Player",
      steps: [
        { name: "STEP 1", detail: "Launch My IPTV Player on your device." },
        { name: "STEP 2", detail: "Go to Settings and tap Add Playlist." },
        { name: "STEP 3", detail: "Enter your M3U URL or Xtream Codes login details." },
        { name: "STEP 4", detail: "Save your settings and go back to the home screen." },
        { name: "STEP 5", detail: "Your channels load automatically. Pick anything and start watching." }
      ]
    },
    {
      title: "Smart IPTV",
      steps: [
        { name: "STEP 1", detail: "Install Smart IPTV from your Smart TV app store." },
        { name: "STEP 2", detail: "Open the app and note your TV MAC address shown on screen." },
        { name: "STEP 3", detail: "On your phone or PC, go to siptv.eu and enter your MAC address." },
        { name: "STEP 4", detail: "Paste your M3U playlist URL into the field and click Upload." },
        { name: "STEP 5", detail: "Restart Smart IPTV on your TV and your channels appear automatically." }
      ]
    },
    {
      title: "iPlayTV Apple TV",
      steps: [
        { name: "STEP 1", detail: "Download iPlayTV from the Apple TV App Store." },
        { name: "STEP 2", detail: "Open the app and tap Add IPTV Provider." },
        { name: "STEP 3", detail: "Choose Xtream Codes API or M3U URL as your login method." },
        { name: "STEP 4", detail: "Enter your username, password, and server URL exactly as received." },
        { name: "STEP 5", detail: "Tap Save and your full channel list loads on your Apple TV instantly." }
      ]
    },
    {
      title: "Smart STB",
      steps: [
        { name: "STEP 1", detail: "Install Smart STB from the Google Play Store on your Android device." },
        { name: "STEP 2", detail: "Open the app and tap Settings from the main screen." },
        { name: "STEP 3", detail: "Select Portal URL and paste the portal address we sent you." },
        { name: "STEP 4", detail: "Save your settings and go back to the Smart STB home screen." },
        { name: "STEP 5", detail: "Your full IPTV channel list loads through the virtual STB interface automatically." }
      ]
    },
    {
      title: "SET IPTV",
      steps: [
        { name: "STEP 1", detail: "Open SET IPTV from your Smart TV app store and launch it." },
        { name: "STEP 2", detail: "Note your device MAC address shown on the SET IPTV screen." },
        { name: "STEP 3", detail: "Go to setiptv.com on your phone or PC and enter your MAC address." },
        { name: "STEP 4", detail: "Paste your M3U playlist URL and click Activate." },
        { name: "STEP 5", detail: "Restart SET IPTV on your TV, and all your channels load right away." }
      ]
    },
    {
      title: "NET IPTV",
      steps: [
        { name: "STEP 1", detail: "Install NET IPTV from your Samsung or LG Smart TV app store." },
        { name: "STEP 2", detail: "Open the app and note your device's MAC address on the screen." },
        { name: "STEP 3", detail: "Go to netiptv.net on your phone or PC and log in or register." },
        { name: "STEP 4", detail: "Enter your MAC address and paste your M3U playlist URL into the field." },
        { name: "STEP 5", detail: "Save and restart NET IPTV on your TV to load all your channels." }
      ]
    },
    {
      title: "Kodi",
      steps: [
        { name: "STEP 1", detail: "Open Kodi on your device and go to Addons from the main menu." },
        { name: "STEP 2", detail: "Tap the open box icon and select Install from Repository." },
        { name: "STEP 3", detail: "Go to Kodi Addon Repository, then PVR Clients." },
        { name: "STEP 4", detail: "Find and install PVR IPTV Simple Client from the list." },
        { name: "STEP 5", detail: "Open the addon settings, paste your M3U playlist URL, and enable it." },
        { name: "STEP 6", detail: "Go back to the main menu, and your channels appear under TV automatically." }
      ]
    },
    {
      title: "IPTV Smart Purple",
      steps: [
        { name: "STEP 1", detail: "Install IPTV Smart Purple from your device app store." },
        { name: "STEP 2", detail: "Open the app and tap Add New Playlist or Provider." },
        { name: "STEP 3", detail: "Choose Xtream Codes API or M3U URL as your connection type." },
        { name: "STEP 4", detail: "Enter your IPTV login credentials exactly as we sent them to you." },
        { name: "STEP 5", detail: "Tap Connect and your full channel list loads within seconds." }
      ]
    },
    {
      title: "VLC Player",
      steps: [
        { name: "STEP 1", detail: "Download and install VLC Player for free from videolan.org on your device." },
        { name: "STEP 2", detail: "Open VLC and click Media on Windows or File on Mac." },
        { name: "STEP 3", detail: "Select Open Network Stream from the dropdown menu." },
        { name: "STEP 4", detail: "Paste your M3U IPTV playlist URL into the network URL field." },
        { name: "STEP 5", detail: "Click Play, and your channels start streaming immediately through VLC." }
      ]
    },
    {
      title: "TiviMate",
      steps: [
        { name: "STEP 1", detail: "Install TiviMate from the Google Play Store on your Android device or box." },
        { name: "STEP 2", detail: "Open TiviMate and tap Add Playlist from the welcome screen." },
        { name: "STEP 3", detail: "Select Xtream Codes API as your playlist type." },
        { name: "STEP 4", detail: "Enter your username, password, and server URL exactly as received." },
        { name: "STEP 5", detail: "Tap Next and your full channel list and EPG guide load automatically." }
      ]
    },
    {
      title: "Chromecast",
      steps: [
        { name: "STEP 1", detail: "Install IPTV Smarters Pro on your Android phone from Google Play Store." },
        { name: "STEP 2", detail: "Open the app and enter your IPTV login credentials to load your channels." },
        { name: "STEP 3", detail: "Make sure your phone and Chromecast are on the same Wi-Fi network." },
        { name: "STEP 4", detail: "Tap the Cast icon inside IPTV Smarters Pro on your phone." },
        { name: "STEP 5", detail: "Select your Chromecast device and your stream appears on your TV instantly." }
      ]
    },
    {
      title: "Duplex IPTV",
      steps: [
        { name: "STEP 1", detail: "Install Duplex IPTV from your device app store and open it." },
        { name: "STEP 2", detail: "Tap the plus icon and select Add New Source." },
        { name: "STEP 3", detail: "Choose Xtream Codes or M3U URL as your source type." },
        { name: "STEP 4", detail: "Enter your IPTV login credentials exactly as we sent them to you." },
        { name: "STEP 5", detail: "Tap Connect and browse your full channel library right away." }
      ]
    },
    {
      title: "IPTV Extreme",
      steps: [
        { name: "STEP 1", detail: "Install IPTV Extreme from the Google Play Store on your Android device." },
        { name: "STEP 2", detail: "Open the app and tap the plus icon at the top of the screen." },
        { name: "STEP 3", detail: "Select Remote Playlist from the available options." },
        { name: "STEP 4", detail: "Paste your M3U IPTV playlist URL into the URL field and save." },
        { name: "STEP 5", detail: "Your full channel list loads into IPTV Extreme within seconds." }
      ]
    },
    {
      title: "IPTV Smarters Pro",
      steps: [
        { name: "STEP 1", detail: "Install IPTV Smarters Pro from your device app store and open it." },
        { name: "STEP 2", detail: "Tap Add New User from the login screen." },
        { name: "STEP 3", detail: "Select Login with Xtream Codes API as your method." },
        { name: "STEP 4", detail: "Enter your username, password, and server URL exactly as received." },
        { name: "STEP 5", detail: "Tap Add User and your complete IPTV library activates within seconds." }
      ]
    }
  ];

  const activeGuides = activeTab === "device" ? deviceGuides : appGuides;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="setup-guides" className="section" style={{ background: '#020202', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        {/* Tab Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            background: 'rgba(255,255,255,0.05)', 
            padding: '0.5rem', 
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <button 
              onClick={() => { setActiveTab("device"); setOpenIndex(0); }}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === "device" ? 'var(--primary)' : 'transparent',
                color: activeTab === "device" ? '#fff' : '#a1a1aa',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Monitor size={18} />
              Setup by Device
            </button>
            <button 
              onClick={() => { setActiveTab("app"); setOpenIndex(0); }}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === "app" ? 'var(--success)' : 'transparent',
                color: activeTab === "app" ? '#fff' : '#a1a1aa',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <AppWindow size={18} />
              Setup by App
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {activeGuides.map((guide, index) => {
            const isOpen = openIndex === index;
            const accentColor = activeTab === "device" ? 'var(--primary)' : 'var(--success)';
            const bgAccent = activeTab === "device" ? 'rgba(0, 68, 255, 0.1)' : 'rgba(16, 185, 129, 0.1)';

            return (
              <div 
                key={index} 
                style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem',
                    background: isOpen ? bgAccent : 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {guide.title}
                  {isOpen ? <ChevronUp size={24} color={accentColor} /> : <ChevronDown size={24} color="var(--muted)" />}
                </button>
                
                <div style={{
                  maxHeight: isOpen ? '1000px' : '0',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  padding: isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
                  background: isOpen ? 'rgba(255,255,255,0.01)' : 'transparent'
                }}>
                  <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    
                    {guide.desc && (
                      <p style={{ color: '#a1a1aa', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        {guide.desc}
                      </p>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {guide.steps.map((step, stepIndex) => (
                        <div key={stepIndex} style={{ 
                          display: 'flex', 
                          flexWrap: 'wrap',
                          gap: '1rem', 
                          background: 'rgba(0,0,0,0.2)', 
                          padding: '1rem', 
                          borderRadius: '0.75rem',
                          border: '1px solid rgba(255,255,255,0.02)'
                        }}>
                          <div style={{ 
                            color: accentColor, 
                            fontWeight: 800, 
                            fontSize: '0.9rem', 
                            marginTop: '2px',
                            flexShrink: 0
                          }}>
                            {step.name}
                          </div>
                          <div style={{ color: '#e4e4e7', lineHeight: 1.5, fontSize: '0.95rem' }}>
                            {step.detail}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
