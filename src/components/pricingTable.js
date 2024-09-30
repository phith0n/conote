import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";

function GreenCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6 p-1 shrink-0 text-emerald-500"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

function RedXIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 p-1 shrink-0 text-red-500"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WhiteCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6 p-1 shrink-0 text-emerald-50"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export default function PricingTable() {
  return (
    <div class="flex flex-row gap-4">
      <div class="basis-1/3">
        <div class="max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200 lg:max-md-full">
          <div class="flex flex-col">
            <header class="flex flex-col gap-6 p-6 text-slate-400">
              <h3 class="text-xl font-bold text-slate-700">
                <Translate id="pricingTable.cloudVersion.title">
                  Cloud
                </Translate>
                <span class="block text-sm font-normal text-slate-400">
                  <Translate id="pricingTable.cloudVersion.subtitle">
                    No need to deploy, ready to use
                  </Translate>
                </span>
              </h3>
              <h4>
                <span class="text-3xl">$</span>
                <span class="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                  0
                </span>
                <span class="text-sm">/month</span>
              </h4>
              <Link
                class="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-emerald-500 shadow-emerald-100 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none border-none cursor-pointer hover:no-underline hover:text-white"
                href="https://note.leavesongs.com"
                target="_blank"
              >
                <span>
                  <Translate id="pricingTable.cloudVersion.button">
                    Get Started
                  </Translate>
                </span>
              </Link>
            </header>
            <div class="p-6">
              <ul class="space-y-4 ps-0">
                <li class="flex items-start gap-2">
                  <GreenCheckIcon />
                  <Translate id="pricingTable.cloudVersion.features.1">
                    All self-hosted features
                  </Translate>
                </li>
                <li class="flex items-start gap-2">
                  <GreenCheckIcon />
                  <Translate id="pricingTable.cloudVersion.features.2">
                    Free built-in domain
                  </Translate>
                </li>
                <li class="flex items-start gap-2">
                  <RedXIcon />
                  <Translate id="pricingTable.cloudVersion.features.3">
                    Independent server and IP address
                  </Translate>
                </li>
                <li class="flex items-start gap-2">
                  <RedXIcon />
                  <Translate id="pricingTable.cloudVersion.features.4">
                    Registration is not open
                  </Translate>
                </li>
              </ul>
            </div>
            <footer class="p-6 text-sm text-center border-t border-slate-200 bg-slate-100">
              <Link
                to={useBaseUrl("docs/guide/introduce")}
                class="transition-colors duration-300 text-emerald-500 hover:text-emerald-600 focus:text-emerald-700"
              >
                <Translate id="pricingTable.cloudVersion.features.all">
                  See all features
                </Translate>
              </Link>
            </footer>
          </div>
        </div>
      </div>
      <div class="basis-1/3">
        <div class="max-w-sm mx-auto overflow-hidden rounded shadow-xl bg-emerald-500 text-emerald-100 shadow-emerald-100 lg:max-md-full">
          <div class="flex flex-col">
            <header class="flex flex-col gap-6 p-6 text-emerald-200">
              <h3 class="text-xl font-bold text-left text-emerald-50">
                <Translate id="pricingTable.selfHostedVersion.title">
                  Self-hosted
                </Translate>
                <span class="block text-sm font-normal text-emerald-200">
                  <Translate id="pricingTable.selfHostedVersion.subtitle">
                    Free, self-hosted server
                  </Translate>
                </span>
              </h3>
              <h4>
                <span class="text-3xl">$</span>
                <span class="text-5xl font-bold tracking-tighter transition-all duration-300 text-emerald-50 lg:text-6xl">
                  0
                </span>
                <span class="text-sm">/month</span>
              </h4>
              <Link
                to={useBaseUrl("docs/self-hosted/installation/requirement")}
                class="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded shadow-lg whitespace-nowrap bg-emerald-50 text-emerald-500 shadow-emerald-600 hover:text-emerald-600 hover:shadow-md hover:shadow-emerald-600 focus:text-emerald-700 focus:shadow-md focus:shadow-emerald-600 focus-visible:outline-none border-none cursor-pointer hover:no-underline"
              >
                <span>
                  <Translate id="pricingTable.selfHostedVersion.button">
                    Read Documentation
                  </Translate>
                </span>
              </Link>
            </header>
            <div class="p-6">
              <ul class="space-y-4 ps-0">
                <li class="flex items-start gap-2">
                  <WhiteCheckIcon />
                  <Translate id="pricingTable.selfHostedVersion.features.1">
                    Docker one-click deployment, zero cost
                  </Translate>
                </li>
                <li class="flex items-start gap-2">
                  <WhiteCheckIcon />
                  <Translate id="pricingTable.selfHostedVersion.features.2">
                    Purchase your own domain and configure DNS
                  </Translate>
                </li>
                <li class="flex items-start gap-2">
                  <WhiteCheckIcon />
                  <Translate id="pricingTable.selfHostedVersion.features.3">
                    Independent server and IP address
                  </Translate>
                </li>
                <li class="flex items-start gap-2">
                  <WhiteCheckIcon />
                  <Translate id="pricingTable.selfHostedVersion.features.4">
                    Full privacy
                  </Translate>
                </li>
                <li class="flex items-start gap-2">
                  <WhiteCheckIcon />
                  <Translate id="pricingTable.selfHostedVersion.features.5">
                    Public community support
                  </Translate>
                </li>
              </ul>
            </div>
            <footer class="p-6 text-sm text-center border-t border-emerald-600 bg-emerald-600/50">
              <Link
                to={useBaseUrl("docs/guide/introduce")}
                class="transition-colors duration-300 text-emerald-100 hover:text-emerald-50 focus:text-emerald-50"
                href="#"
              >
                <Translate id="pricingTable.selfHostedVersion.features.all">
                  See all features
                </Translate>
              </Link>
            </footer>
          </div>
        </div>
      </div>
      <div class="basis-1/3">
        <div class="max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200 lg:max-md-full">
          <div class="flex flex-col">
            <header class="flex flex-col gap-6 p-6 text-slate-400">
              <h3 class="text-xl font-bold text-slate-700">
                <Translate id="pricingTable.commercialVersion.title">
                  Commercial
                </Translate>
                <span class="block text-sm font-normal text-slate-400">
                  <Translate id="pricingTable.commercialVersion.subtitle">
                    Remove all restrictions
                  </Translate>
                </span>
              </h3>
              <h4>
                <span class="text-3xl">$</span>
                <span class="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                  100
                </span>
                <span class="text-sm">/month</span>
              </h4>
              <button class="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-emerald-500 shadow-emerald-100 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none border-none cursor-not-allowed opacity-60">
                <span>
                  <Translate id="pricingTable.commercialVersion.button">
                    Coming soon
                  </Translate>
                </span>
              </button>
            </header>
            <div class="p-6">
              <ul class="space-y-4 ps-0">
                <li class="flex items-start gap-2">
                  <GreenCheckIcon />
                  <Translate id="pricingTable.commercialVersion.features.1">
                    All self-hosted features
                  </Translate>
                </li>
                <li class="flex items-start gap-2">
                  <GreenCheckIcon />
                  <Translate id="pricingTable.commercialVersion.features.2">
                    Custom features
                  </Translate>
                </li>
              </ul>
            </div>
            <footer class="p-6 text-sm text-center border-t border-slate-200 bg-slate-100">
              <Link
                to={useBaseUrl("docs/guide/introduce")}
                class="transition-colors duration-300 text-emerald-500 hover:text-emerald-600 focus:text-emerald-700"
              >
                <Translate id="pricingTable.commercialVersion.features.all">
                  See all features
                </Translate>
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
